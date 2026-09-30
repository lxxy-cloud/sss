"use client";

import { FormEvent, useState } from "react";

import { AuthenticatedPage } from "./AuthenticatedPage";
import { SIDEBAR } from "./pageConfigs";
import styles from "./FormPage.module.css";

export type FormField =
  | { kind: "text"; name: string; label: string; required?: boolean; placeholder?: string; defaultValue?: string }
  | { kind: "textarea"; name: string; label: string; required?: boolean; placeholder?: string; defaultValue?: string; rows?: number }
  | { kind: "select"; name: string; label: string; required?: boolean; options: readonly string[]; defaultValue?: string }
  | { kind: "date"; name: string; label: string; required?: boolean; defaultValue?: string }
  | { kind: "number"; name: string; label: string; required?: boolean; placeholder?: string; defaultValue?: string }
  | { kind: "radio"; name: string; label: string; options: readonly string[]; defaultValue?: string }
  | { kind: "file"; name: string; label: string; required?: boolean };

export type FormSection = {
  title: string;
  fields: FormField[];
};

export type FormPageProps = {
  breadcrumb: string[];
  sections: FormSection[];
  submitLabel?: string;
  onSubmit?: (values: Record<string, string>) => void;
  sidebar?: typeof SIDEBAR;
};

export function FormPage(props: FormPageProps) {
  const { breadcrumb, sections, submitLabel = "提交", sidebar = SIDEBAR } = props;
  const [submitted, setSubmitted] = useState<Record<string, string> | null>(null);

  // Initial values
  const initial: Record<string, string> = {};
  for (const section of sections) {
    for (const f of section.fields) {
      if ("defaultValue" in f && f.defaultValue !== undefined) initial[f.name] = f.defaultValue;
      else if (f.kind === "radio") initial[f.name] = f.options[0];
      else initial[f.name] = "";
    }
  }
  const [values, setValues] = useState<Record<string, string>>(initial);

  function setField(name: string, val: string) {
    setValues((v) => ({ ...v, [name]: val }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted({ ...values });
    if (typeof window !== "undefined") {
      window.alert("演示模式：表单已提交\n（实际接入后端接口）\n\n" + JSON.stringify(values, null, 2));
    }
  }

  function reset() {
    setValues({ ...initial });
    setSubmitted(null);
  }

  return (
    <AuthenticatedPage
      sidebar={sidebar}
      breadcrumb={breadcrumb}
      columns={[]}
      rows={[]}
      rowKey={() => "0"}
    >
      <form className={styles.form} onSubmit={onSubmit}>
        {sections.map((section, si) => (
          <fieldset key={si} className={styles.section}>
            <legend className={styles.sectionTitle}>{section.title}</legend>
            <div className={styles.grid}>
              {section.fields.map((field) => {
                const v = values[field.name] ?? "";
                if (field.kind === "text") {
                  return (
                    <label key={field.name} className={styles.field}>
                      <span className={styles.label}>{field.label}{field.required && <em>*</em>}</span>
                      <input
                        type="text"
                        value={v}
                        placeholder={field.placeholder ?? `请输入${field.label}`}
                        onChange={(e) => setField(field.name, e.target.value)}
                      />
                    </label>
                  );
                }
                if (field.kind === "textarea") {
                  return (
                    <label key={field.name} className={styles.field + " " + styles.full}>
                      <span className={styles.label}>{field.label}{field.required && <em>*</em>}</span>
                      <textarea
                        rows={field.rows ?? 4}
                        value={v}
                        placeholder={field.placeholder ?? `请输入${field.label}`}
                        onChange={(e) => setField(field.name, e.target.value)}
                      />
                    </label>
                  );
                }
                if (field.kind === "select") {
                  return (
                    <label key={field.name} className={styles.field}>
                      <span className={styles.label}>{field.label}{field.required && <em>*</em>}</span>
                      <select value={v} onChange={(e) => setField(field.name, e.target.value)}>
                        <option value="">请选择</option>
                        {field.options.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </label>
                  );
                }
                if (field.kind === "date") {
                  return (
                    <label key={field.name} className={styles.field}>
                      <span className={styles.label}>{field.label}{field.required && <em>*</em>}</span>
                      <input type="date" value={v} onChange={(e) => setField(field.name, e.target.value)} />
                    </label>
                  );
                }
                if (field.kind === "number") {
                  return (
                    <label key={field.name} className={styles.field}>
                      <span className={styles.label}>{field.label}{field.required && <em>*</em>}</span>
                      <input
                        type="number"
                        value={v}
                        placeholder={field.placeholder ?? `请输入${field.label}`}
                        onChange={(e) => setField(field.name, e.target.value)}
                      />
                    </label>
                  );
                }
                if (field.kind === "radio") {
                  return (
                    <div key={field.name} className={styles.field}>
                      <span className={styles.label}>{field.label}</span>
                      <div className={styles.radioGroup}>
                        {field.options.map((o) => (
                          <label key={o} className={styles.radio}>
                            <input
                              type="radio"
                              name={field.name}
                              checked={v === o}
                              onChange={() => setField(field.name, o)}
                            />
                            {o}
                          </label>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <label key={field.name} className={styles.field}>
                    <span className={styles.label}>{field.label}{field.required && <em>*</em>}</span>
                    <input type="file" onChange={(e) => setField(field.name, e.target.files?.[0]?.name ?? "")} />
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
        <div className={styles.actions}>
          <button type="submit" className={styles.submit}>{submitLabel}</button>
          <button type="button" className={styles.reset} onClick={reset}>重置</button>
          <button type="button" className={styles.cancel} onClick={() => history.back()}>取消</button>
        </div>
        {submitted && (
          <div className={styles.receipt}>
            <h3>已提交数据（演示）</h3>
            <pre>{JSON.stringify(submitted, null, 2)}</pre>
          </div>
        )}
      </form>
    </AuthenticatedPage>
  );
}

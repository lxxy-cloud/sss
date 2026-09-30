"use client";

import Link from "next/link";
import { ReactNode } from "react";

import { AuthenticatedPage } from "./AuthenticatedPage";
import { SIDEBAR } from "./pageConfigs";
import styles from "./DetailPage.module.css";

export type DetailField = {
  label: string;
  value: ReactNode;
  span?: 1 | 2;
};

export type DetailSection = {
  title: string;
  fields: DetailField[];
};

export type DetailPageProps = {
  breadcrumb: string[];
  id: string;
  title: string;
  status?: { label: string; tone: "green" | "blue" | "orange" | "red" | "gray" };
  sections: DetailSection[];
  actions?: { label: string; primary?: boolean; danger?: boolean; href?: string; onClick?: () => void }[];
  history?: Array<{ time: string; actor: string; action: string }>;
};

function statusClass(tone?: string): string {
  if (tone === "green") return styles.statusGreen;
  if (tone === "blue") return styles.statusBlue;
  if (tone === "orange") return styles.statusOrange;
  if (tone === "red") return styles.statusRed;
  return styles.statusGray;
}

export function DetailPage(props: DetailPageProps) {
  const { breadcrumb, id, title, status, sections, actions = [], history } = props;
  return (
    <AuthenticatedPage
      sidebar={SIDEBAR}
      breadcrumb={breadcrumb}
      columns={[]}
      rows={[]}
      rowKey={() => "0"}
    >
      <div className={styles.detail}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>
              {title}
              <span className={styles.id}>ID: {id}</span>
            </h2>
            {status && (
              <span className={`${styles.status} ${statusClass(status.tone)}`}>{status.label}</span>
            )}
          </div>
          <div className={styles.actions}>
            {actions.map((a) => {
              const cls = a.danger ? styles.danger : a.primary ? styles.primary : styles.secondary;
              if (a.href) {
                return (
                  <Link key={a.label} href={a.href} className={cls}>
                    {a.label}
                  </Link>
                );
              }
              return (
                <button key={a.label} type="button" className={cls} onClick={a.onClick}>
                  {a.label}
                </button>
              );
            })}
          </div>
        </header>
        {sections.map((s, i) => (
          <section key={i} className={styles.section}>
            <h3 className={styles.sectionTitle}>{s.title}</h3>
            <dl className={styles.grid}>
              {s.fields.map((f) => (
                <div key={f.label} className={f.span === 2 ? styles.fieldFull : styles.field}>
                  <dt>{f.label}</dt>
                  <dd>{f.value || <span className={styles.empty}>—</span>}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
        {history && history.length > 0 && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>操作历史</h3>
            <ul className={styles.history}>
              {history.map((h, i) => (
                <li key={i}>
                  <time>{h.time}</time>
                  <strong>{h.actor}</strong>
                  <span>{h.action}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </AuthenticatedPage>
  );
}

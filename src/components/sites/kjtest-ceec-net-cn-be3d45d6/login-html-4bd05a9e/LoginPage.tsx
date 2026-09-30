'use client'

import type { FormEvent } from 'react'

import styles from './LoginPage.module.css'

export function LoginPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <main className={styles.loginWrapper}>
      <section className={styles.loginBody} aria-label="用户登录">
        <form className={styles.card} onSubmit={handleSubmit}>
          <header className={styles.cardHeader}>用户登录</header>
          <div className={styles.formContent}>
            <div className={styles.fieldRow}>
              <span className={`${styles.inputIcon} ${styles.accountIcon}`} aria-hidden="true" />
              <input aria-label="账号" className={styles.input} name="account" placeholder="账号" type="text" />
            </div>
            <div className={styles.fieldRow}>
              <span className={`${styles.inputIcon} ${styles.passwordIcon}`} aria-hidden="true" />
              <input aria-label="密码" className={styles.input} name="password" placeholder="密码" type="password" />
            </div>
            <label className={styles.rememberRow}>
              <input className={styles.checkbox} name="remember" type="checkbox" />
              <span>记住用户名</span>
            </label>
            <button className={styles.submitButton} type="submit">
              登 录
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

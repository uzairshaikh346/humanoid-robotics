import React from 'react';
import clsx from 'clsx';
import styles from './Callout.module.css';

export default function Callout({type, children}) {
  const icon = getIcon(type);
  const className = clsx('callout', styles.callout, styles[type]);

  return (
    <div className={className}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

function getIcon(type) {
  switch(type) {
    case 'info':
      return 'ℹ️';
    case 'tip':
      return '💡';
    case 'caution':
      return '⚠️';
    case 'danger':
      return '❌';
    default:
      return 'ℹ️';
  }
}
import styles from './index.less';

import { useModel } from 'umi';

export default function IndexPage() {
  const { masterState } = useModel('@@qiankunStateFromMaster');
  return (
    <div>
      <h1 className={styles.title}>App1</h1>
      <h2>master：{ masterState.text }</h2>
    </div>
  );
}

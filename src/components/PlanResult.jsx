import styles from './PlanResult.module.css';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

import confetti from 'canvas-confetti';

export const PlanResult = ({ plan, onReset }) => {
    // コンポーネント表示時に紙吹雪を発射
    if (plan) {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    if (!plan) return null;

    const handleShare = () => {
        const text = `
🌸 無責任お花見計画書 🌸
場所: ${plan.location}
日時: ${plan.date}
予算: ${plan.budget}
持ち物: ${plan.items.join(', ')}
責任者: ${plan.manager}

⚠️ ルール: ${plan.rule}

#ZenNageOhanami #責任放棄
`.trim();

        navigator.clipboard.writeText(text).then(() => {
            alert('無責任な計画をコピーしました。SNSに貼り付けて拡散してください。');
        });
    };

    return (
        <Card className={styles.resultCard}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-primary)' }}>
                決定された計画
            </h2>

            <div className={styles.item}>
                <span className={styles.label}>Location</span>
                <div className={styles.value}>{plan.location}</div>
            </div>

            <div className={styles.item}>
                <span className={styles.label}>Date</span>
                <div className={styles.value}>{plan.date}</div>
            </div>

            <div className={styles.item}>
                <span className={styles.label}>Manager (Responsible)</span>
                <div className={`${styles.value} ${styles.highlight}`}>{plan.manager}</div>
            </div>

            <div className={styles.item}>
                <span className={styles.label}>Budget</span>
                <div className={styles.value}>{plan.budget}</div>
            </div>

            <div className={styles.item}>
                <span className={styles.label}>Items to Bring</span>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                    {plan.items.map((item, idx) => (
                        <li key={idx} className={styles.value} style={{ fontSize: '1.2rem' }}>• {item}</li>
                    ))}
                </ul>
            </div>

            <div className={styles.ruleBox}>
                <span className={styles.label} style={{ color: 'var(--color-danger)' }}>WARNING: ABSOLUTE RULE</span>
                <div className={`${styles.value} ${styles.ruleText}`}>{plan.rule}</div>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Button onClick={handleShare}>共有して確定させる</Button>
                <Button variant="secondary" onClick={onReset}>無かったことにする</Button>
            </div>
        </Card>
    );
};

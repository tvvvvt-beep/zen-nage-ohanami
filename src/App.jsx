import { useState } from 'react';
import { Button, Card } from './components/ui';
import { PlanResult } from './components/PlanResult';
import { generatePlan } from './utils/generator';
import './App.css'

function App() {
  const [plan, setPlan] = useState(null);

  const handleChaos = () => {
    // 少しだけ演出用のラグを入れる
    if (!plan) {
      const newPlan = generatePlan();
      setPlan(newPlan);
    }
  };

  const handleReset = () => {
    setPlan(null);
  };

  return (
    <div className="app-container">
      <header style={{ padding: '4rem 2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem', textShadow: 'var(--shadow-glow)' }}>
          Zen-Nage<br />
          <span className="chaos-text" style={{ color: 'var(--color-primary)' }}>Ohanami</span>
        </h1>
        <p style={{ marginBottom: '3rem', fontSize: '1.2rem', opacity: 0.8 }}>
          計画は、全部宇宙に投げよう。<br />
          究極の無責任お花見プランナー
        </p>

        {!plan ? (
          <Card className="intro-card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
            <h2 style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>免責事項</h2>
            <p style={{ marginBottom: '2rem', fontSize: '0.9rem' }}>
              本アプリを使用して発生したいかなるトラブル（場所取りの失敗、人間関係の破綻、サハラ砂漠への誤集合など）について、
              開発者および本アプリは一切の責任を負いません。全ては運命です。
            </p>
            <div style={{ textAlign: 'center' }}>
              <Button variant="chaos" onClick={handleChaos}>
                全ての責任を放棄して始める
              </Button>
            </div>
          </Card>
        ) : (
          <PlanResult plan={plan} onReset={handleReset} />
        )}
      </header>
    </div>
  )
}

export default App

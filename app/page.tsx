'use client'

import LiquidEther from '@/components/LiquidEther'

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <LiquidEther
        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.3}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.3}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
      
      {/* Tu contenido va encima del fondo */}
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        zIndex: 10
      }}>
        <h1 style={{ fontSize: '4rem', margin: 0 }}>
          Hola soy Milan Ostoic
        </h1>
        <p style={{ fontSize: '1.5rem' }}>
          Empezamos a trabajar juntos.
        </p>
      </div>
    </div>
  )
}
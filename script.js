*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #feefe5;
  --pink: #e87888;
  --pink-light: #f5b8c4;
  --gold: #f0d594;
  --brown: #8b5c4c;
  --purple: #b87fd4;
  --blue: #7faad4;
}

body { font-family: 'Pixelify Sans', sans-serif; background: var(--bg); min-height: 100vh; display: flex; flex-direction: column; align-items: center; padding: 60px 16px 80px; overflow-x: hidden; }

#appHeader { text-align: center; margin-bottom: 30px; }
#mainTitle { font-size: clamp(2rem, 6vw, 3.2rem); color: var(--brown); text-shadow: 4px 4px 0 var(--pink-light); margin-bottom: 10px; }
#subTitle { font-size: clamp(1rem, 3vw, 1.2rem); color: #b06070; min-height: 1.5em; }

#musicBtn { font-family: 'Pixelify Sans', sans-serif; background: var(--gold); border: 3px solid var(--brown); padding: 10px 20px; cursor: pointer; box-shadow: 4px 4px 0 var(--brown); margin-bottom: 40px; font-size: 1rem; font-weight: 600; color: var(--brown); transition: transform 0.1s, box-shadow 0.1s; }
#musicBtn:active { transform: translate(2px, 2px); box-shadow: 2px 2px 0 var(--brown); }

.app-container { display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 600px; }
.wish-section { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; margin-bottom: 40px; }
.wish-section input { font-family: 'Pixelify Sans', sans-serif; font-size: 1.1rem; width: 100%; padding: 14px 20px; border: 3px solid var(--pink); background: #fff8f3; color: var(--brown); outline: none; box-shadow: 4px 4px 0 var(--pink-light); text-align: center; }
.wish-section input:focus { border-color: var(--brown); box-shadow: 4px 4px 0 var(--gold); }

#wishBtn { font-family: 'Pixelify Sans', sans-serif; font-size: 1.15rem; font-weight: 700; padding: 14px 40px; background: var(--pink); color: #fff; border: 3px solid var(--brown); box-shadow: 4px 4px 0 var(--brown); cursor: pointer; letter-spacing: 1px; transition: transform .1s, box-shadow .1s; }
#wishBtn:hover { background: #d96070; }
#wishBtn:active { transform: translate(3px,3px); box-shadow: 1px 1px 0 var(--brown); }
#wishBtn:disabled { opacity:.55; cursor:default; transform:none; box-shadow:4px 4px 0 var(--brown); }

#wishVault { display: none; width: 100%; background: #fff8f0; border: 3px solid var(--pink); box-shadow: 6px 6px 0 var(--pink-light); padding: 24px; text-align: center; margin-bottom: 40px; animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
@keyframes popIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
#wishVault h3 { color: var(--brown); font-size: 1.2rem; margin-bottom: 12px; }
#wishVault p { color: #c06070; font-size: 1.1rem; font-style: italic; font-weight: 600; word-wrap: break-word; }

#bonusSection { display: none; width: 100%; background: #fff; border: 3px dashed var(--purple); padding: 20px 14px; margin-bottom: 40px; text-align: center; box-shadow: 6px 6px 0 var(--purple); }
.game-box { margin-top: 15px; background: #e2f0d9; border: 3px solid var(--brown); height: 240px; position: relative; overflow: hidden; user-select: none; }
.lane { position: absolute; left: 0; width: 100%; height: 40px; background: #ebdcb9; border-top: 2px dashed #fff; border-bottom: 2px dashed #fff; }
.lane-1 { top: 40px; background: #6b7c85; } .lane-2 { top: 80px; background: #556670; } .lane-3 { top: 120px; background: #6b7c85; } .lane-4 { top: 160px; background: #556670; }
#chicken { position: absolute; font-size: 24px; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; transition: left 0.1s ease, top 0.1s ease; z-index: 10; }
.goal-cake { position: absolute; top: 4px; left: 50%; transform: translateX(-50%); font-size: 26px; z-index: 5; }

.mobile-controls { display: grid; grid-template-columns: repeat(3, 50px); grid-template-rows: repeat(2, 45px); gap: 8px; justify-content: center; margin: 15px auto 5px; }
.dpad-btn { background: var(--purple); color: white; border: 2px solid var(--brown); font-size: 1.2rem; font-weight: bold; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 2px 2px 0 var(--brown); touch-action: manipulation; }
.dpad-btn:active { transform: translate(1px, 1px); box-shadow: 1px 1px 0 var(--brown); }
.dpad-up { grid-column: 2; grid-row: 1; } .dpad-left { grid-column: 1; grid-row: 2; } .dpad-down { grid-column: 2; grid-row: 2; } .dpad-right { grid-column: 3; grid-row: 2; }
.game-btn { background: var(--purple); color: white; border: 2px solid var(--brown); padding: 10px 24px; font-family: 'Pixelify Sans', sans-serif; font-weight: 600; cursor: pointer; box-shadow: 2px 2px 0 var(--brown); }

.cards-section { display: none; width: 100%; margin-top: 20px; }
.cards-section h2 { text-align: center; color: var(--brown); font-size: 1.4rem; margin-bottom: 24px; }
.cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; width: 100%; }
.flip-card { height: 250px; perspective: 900px; cursor: pointer; }
.flip-card-inner { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform .65s cubic-bezier(.4,0,.2,1); }
.flip-card.flipped .flip-card-inner { transform: rotateY(180deg); }
.flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border: 3px solid var(--brown); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 16px; text-align: center; gap: 8px; }
.flip-card-back { transform: rotateY(180deg); overflow-y: auto; }
.card-joy .flip-card-front { background: #fff0f5; box-shadow: 4px 4px 0 var(--pink); } .card-joy .flip-card-back { background: #ffe8f0; box-shadow: 4px 4px 0 var(--pink); }
.card-luck .flip-card-front { background: #fffff0; box-shadow: 4px 4px 0 var(--gold); } .card-luck .flip-card-back { background: #fffbe0; box-shadow: 4px 4px 0 var(--gold); }
.card-magic .flip-card-front { background: #f5f0ff; box-shadow: 4px 4px 0 var(--purple); } .card-magic .flip-card-back { background: #ede5ff; box-shadow: 4px 4px 0 var(--purple); }
.card-growth .flip-card-front { background: #eef9ff; box-shadow: 4px 4px 0 var(--blue); } .card-growth .flip-card-back { background: #dff2ff; box-shadow: 4px 4px 0 var(--blue); }
.card-msg { font-size: 0.8rem; color: var(--brown); line-height: 1.4; font-weight: 600; } .hint { font-size: .65rem; color: #b08898; margin-top: 4px; }

.envelope-section { display: none; width: 100%; margin-top: 50px; text-align: center; }
.envelope-section h2 { color: var(--brown); font-size: 1.4rem; margin-bottom: 120px; transition: margin-bottom 0.4s ease; }
.envelope-section.expanded h2 { margin-bottom: 170px; }
.envelope-wrapper { position: relative; width: 280px; height: 180px; background: #fdf5e6; border: 4px solid var(--brown); margin: 20px auto 0; cursor: pointer; box-shadow: 6px 6px 0 var(--pink-light); overflow: visible; transition: transform 0.3s; animation: popIn 0.5s cubic-bezier(0.175,0.885,0.32,1.275); }
.envelope-wrapper:hover { transform: translateY(-5px); }
.envelope-flap { position: absolute; top: -4px; left: -4px; width: 280px; height: 100px; z-index: 8; transform-origin: top; transition: transform 0.4s ease, z-index 0.4s; }
.envelope-wrapper.open .envelope-flap { transform: scaleY(-1) translateY(4px); z-index: 2; }
.envelope-pocket-svg { position: absolute; bottom: -4px; left: -4px; width: 280px; height: 125px; z-index: 6; }
.envelope-seal { position: absolute; top: 82px; left: 126px; width: 28px; height: 28px; background: var(--gold); border: 3px solid var(--brown); border-radius: 50%; z-index: 9; display: flex; align-items: center; justify-content: center; font-size: 12px; transition: opacity .2s, transform .2s; }
.envelope-wrapper.open .envelope-seal { opacity: 0; transform: scale(0); }
.letter-card { position: absolute; left: 12px; right: 12px; bottom: 10px; height: 150px; background: white; border: 3px solid var(--brown); z-index: 3; padding: 12px 10px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; overflow: hidden; opacity: 0; transform: translateY(40px); transition: transform .5s cubic-bezier(.175,.885,.32,1.275), opacity .3s ease, height .4s ease; transition-delay: .15s; }
.envelope-wrapper.open .letter-card { opacity: 1; transform: translateY(-135px); height: auto; min-height: 170px; z-index: 7; box-shadow: 0 4px 10px rgba(0,0,0,.05); }
.letter-card p { font-size: .72rem; color: var(--brown); line-height: 1.45; font-weight: 700; }
.confetti { position: fixed; top: -20px; width: 10px; height: 10px; opacity: 0; animation: fall linear forwards; pointer-events: none; z-index: 9999; }
@keyframes fall { 0% { transform: translateY(0) rotate(0deg); opacity:1; } 100% { transform: translateY(105vh) rotate(720deg); opacity:0; } }


const Loader = () => {
  return (
    <div className="loader-container">
  <div className="loader-bar">
    <div className="loader-progress"></div>
  </div>
  <style>{`
    .loader-container {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
    }
    
    .loader-bar {
      width: 200px;
      height: 6px;
      background: #f0f0f0;
      border-radius: 3px;
      overflow: hidden;
    }

    .loader-progress {
      width: 40%;
      height: 100%;
      background: linear-gradient(90deg, #4a90e2, #67b246);
      border-radius: 3px;
      animation: loading 1.5s ease-in-out infinite;
    }

    @keyframes loading {
      0% {
        transform: translateX(-100%);
      }
      50% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `}</style>
</div>  )
}

export default Loader

function App() {
  return (
    <>
      <h1>Portable News App</h1>
      
      <form>
        <input placeholder="Type something..." />
      </form>
      <code>{import.meta.env.VITE_API_BASE }</code>
    </>
    
  )
}

export default App

import './App.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import ProductList from './components/ProductList';
import useFetch from './hooks/useFetch';


function App() {
  const [skip, setSkip] = useState(0);
  const { loading, error, data, complete } = useFetch(skip);
  const loader = useRef(null);

  const handleObserver =useCallback( (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setSkip(skip=>skip+5)
      }
  },[]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
    if (complete){
      observer.unobserve(loader.current)
      console.log('observer removed')
    }
  }, [handleObserver,complete]);

  return (
    <div className="App height">
      <h1>skip: {skip}</h1>
      <h1>loading: {loading === true? 'true':'false'}</h1>
      <h1>complete: {complete === true? 'true':'false'}</h1>
      <div ref={loader} />
      <button onClick={()=>setSkip(skip=>skip+5)}>assdd</button>
      <ProductList
        data={data} 
        error={error}
        complete={complete}
        loading={loading}
        />
    </div>
  );
}

export default App;

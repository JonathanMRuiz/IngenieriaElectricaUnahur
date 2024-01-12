import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Footer from './components/Footer';
import Spinner from './components/Spinner';

const LazyHero = React.lazy(() => import('./components/Hero'));
const LazyDivider = React.lazy(() => import('./components/Divider'));
const LazyHeader = React.lazy(() => import('./components/Header'));

const LazyComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return <div ref={elementRef}>{isVisible && children}</div>;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className={`App ${isLoading ? 'loading' : ''}`}>
      {isLoading ? (
        <div className="loading-overlay">
          <Spinner />
        </div>
      ) : (
        <>
          <LazyComponent>
            <React.Suspense fallback={<Spinner />}>
              <LazyHeader />
            </React.Suspense>
          </LazyComponent>
          <LazyComponent>
            <React.Suspense fallback={<Spinner />}>
              <LazyHero />
            </React.Suspense>
          </LazyComponent>
          <LazyComponent>
            <React.Suspense fallback={<Spinner />}>
              <LazyDivider />
            </React.Suspense>
          </LazyComponent>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

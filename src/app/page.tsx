"use client"

import { useEffect, useRef } from 'react';

export default function Docs() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/redoc@2.1.3/bundles/redoc.standalone.js';
    script.async = true;
    document.body.appendChild(script);

    const redocEl = document.createElement('redoc');
    redocEl.setAttribute('spec-url', '/api.yaml');
    container.current?.appendChild(redocEl);
  }, []);

  return <div ref={container} />;
}

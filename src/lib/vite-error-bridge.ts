// vite-error-bridge.ts - Captura errores de compilación de Vite HMR
// Envía errores al parent window para que el fixer los arregle automáticamente

if (import.meta.hot) {
  // Escuchar errores de Vite (compilación, sintaxis, imports rotos, etc.)
  import.meta.hot.on('vite:error', (payload: any) => {
    // Solo enviar si estamos en iframe
    if (window.parent === window) return;
    
    const errorData = {
      source: 'lovivo-preview-bridge',
      type: 'vite:error',
      level: 'error',
      error: {
        message: payload.err?.message || payload.message || 'Unknown Vite error',
        stack: payload.err?.stack,
        file: payload.err?.loc?.file || payload.err?.id,
        line: payload.err?.loc?.line,
        column: payload.err?.loc?.column,
        frame: payload.err?.frame,  // Código con el error señalado
        plugin: payload.err?.plugin  // Plugin que detectó el error
      },
      timestamp: new Date().toISOString()
    };
    
    // Enviar al parent window (tu app de Lovivo)
    window.parent.postMessage(errorData, '*');
    
    // También loguear para que console-bridge lo capture
    console.error('🔴 Vite Compilation Error:', payload.err?.message || payload.message);
  });

  // Escuchar cuando Vite se recupera de un error (opcional, útil para UX)
  import.meta.hot.on('vite:beforeUpdate', () => {
    // Notificar que se está actualizando (el error podría resolverse)
    if (window.parent !== window) {
      window.parent.postMessage({
        source: 'lovivo-preview-bridge',
        type: 'vite:updating',
        timestamp: new Date().toISOString()
      }, '*');
    }
  });

  import.meta.hot.on('vite:afterUpdate', () => {
    // Notificar que la actualización fue exitosa
    if (window.parent !== window) {
      window.parent.postMessage({
        source: 'lovivo-preview-bridge',
        type: 'vite:updated',
        timestamp: new Date().toISOString()
      }, '*');
    }
  });

  console.log('🔌 Vite Error Bridge initialized');
}

export {};

// Log.js - Sistema de logs controlado por entorno
const Log = (() => {
    const isDev = true; // Cambiar a false para modo producción
  
    const styledLog = (msg, style, method = 'log') => {
      if (!isDev) return;
      console[method](`%c${msg}`, style);
    };
  
    return {
      info: (msg) => styledLog(`ℹ️ INFO: ${msg}`, 'color: DodgerBlue'),
      warn: (msg) => styledLog(`⚠️ WARNING: ${msg}`, 'color: orange', 'warn'),
      error: (msg) => styledLog(`⛔ ERROR: ${msg}`, 'color: red; font-weight: bold', 'error'),
      success: (msg) => styledLog(`✅ SUCCESS: ${msg}`, 'color: green'),
      debug: (msg) => styledLog(`🐞 DEBUG: ${msg}`, 'color: purple', 'debug'),
      group: (label) => isDev && console.group(`📂 ${label}`),
      groupCollapsed: (label) => isDev && console.groupCollapsed(`📂 ${label}`),
      groupEnd: () => isDev && console.groupEnd(),
      trace: (msg = 'Trace') => {
        if (!isDev) return;
        console.log(`%c📍 ${msg}`, 'color: gray');
        console.trace();
      },
      time: (label = '⏱️ Timer') => isDev && console.time(label),
      timeEnd: (label = '⏱️ Timer') => isDev && console.timeEnd(label),
      table: (data) => isDev && console.table(data),
      assert: (condition, msg) => isDev && console.assert(condition, `❗ASSERT FAILED: ${msg}`),
      clear: () => isDev && console.clear(),
    };
  })();
  
  export default Log;
  
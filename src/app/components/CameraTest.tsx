import { useState } from 'react';
import { Camera, X, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export function CameraTest() {
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [testing, setTesting] = useState(false);

  const runTests = async () => {
    setTesting(true);
    const testResults: any = {
      timestamp: new Date().toISOString(),
      tests: {}
    };

    // Test 1: Check if running in secure context
    testResults.tests.secureContext = {
      name: 'HTTPS / Secure Context',
      passed: window.isSecureContext,
      details: window.isSecureContext ? 'Running in secure context' : 'NOT in secure context (requires HTTPS or localhost)',
      critical: !window.isSecureContext
    };

    // Test 2: Check if MediaDevices API exists
    testResults.tests.mediaDevicesAPI = {
      name: 'MediaDevices API Available',
      passed: !!navigator.mediaDevices,
      details: navigator.mediaDevices ? 'navigator.mediaDevices exists' : 'navigator.mediaDevices is undefined',
      critical: !navigator.mediaDevices
    };

    // Test 3: Check if getUserMedia exists
    testResults.tests.getUserMedia = {
      name: 'getUserMedia Function',
      passed: !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia),
      details: (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) 
        ? 'getUserMedia function is available' 
        : 'getUserMedia function is NOT available',
      critical: !(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
    };

    // Test 4: Check Permissions API
    if (navigator.permissions) {
      try {
        const result = await navigator.permissions.query({ name: 'camera' as PermissionName });
        testResults.tests.permissionsAPI = {
          name: 'Camera Permission Status',
          passed: result.state === 'granted' || result.state === 'prompt',
          details: `Permission state: ${result.state}`,
          state: result.state
        };
      } catch (err: any) {
        testResults.tests.permissionsAPI = {
          name: 'Camera Permission Status',
          passed: false,
          details: `Error checking permissions: ${err.message}`,
          error: err.message
        };
      }
    } else {
      testResults.tests.permissionsAPI = {
        name: 'Permissions API',
        passed: false,
        details: 'Permissions API not available'
      };
    }

    // Test 5: Check for iframe context
    testResults.tests.iframeContext = {
      name: 'Running in iframe',
      passed: window.self === window.top,
      details: window.self === window.top 
        ? 'Running in top window (NOT in iframe)' 
        : 'Running inside an iframe (may have restrictions)',
      warning: window.self !== window.top
    };

    // Test 6: Check Permissions-Policy header
    if (document.featurePolicy || (document as any).permissionsPolicy) {
      const policy = document.featurePolicy || (document as any).permissionsPolicy;
      try {
        const cameraAllowed = policy.allowsFeature ? policy.allowsFeature('camera') : 
                             policy.features?.().includes('camera');
        testResults.tests.permissionsPolicy = {
          name: 'Permissions-Policy Header',
          passed: cameraAllowed !== false,
          details: cameraAllowed ? 'Camera is allowed by policy' : 'Camera may be blocked by Permissions-Policy header',
          warning: !cameraAllowed
        };
      } catch (err) {
        testResults.tests.permissionsPolicy = {
          name: 'Permissions-Policy Header',
          passed: true,
          details: 'Could not check policy (likely OK)'
        };
      }
    }

    // Test 7: Try to enumerate devices
    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cameras = devices.filter(d => d.kind === 'videoinput');
        testResults.tests.enumerateDevices = {
          name: 'Camera Devices Found',
          passed: cameras.length > 0,
          details: `Found ${cameras.length} camera(s)`,
          devices: cameras.map(c => ({ label: c.label || '(unlabeled)', deviceId: c.deviceId }))
        };
      } catch (err: any) {
        testResults.tests.enumerateDevices = {
          name: 'Enumerate Devices',
          passed: false,
          details: `Error: ${err.message}`,
          error: err.message
        };
      }
    }

    // Test 8: Try actual camera access
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: true, 
          audio: false 
        });
        
        testResults.tests.cameraAccess = {
          name: '✅ CAMERA ACCESS TEST',
          passed: true,
          details: 'Successfully obtained camera stream!',
          tracks: stream.getTracks().map(t => ({
            kind: t.kind,
            label: t.label,
            enabled: t.enabled,
            readyState: t.readyState
          }))
        };

        // Stop the stream immediately
        stream.getTracks().forEach(track => track.stop());
        
      } catch (err: any) {
        testResults.tests.cameraAccess = {
          name: '❌ CAMERA ACCESS TEST',
          passed: false,
          details: `Failed to access camera: ${err.name} - ${err.message}`,
          error: {
            name: err.name,
            message: err.message
          },
          critical: true
        };
      }
    }

    // Additional environment info
    testResults.environment = {
      userAgent: navigator.userAgent,
      protocol: window.location.protocol,
      hostname: window.location.hostname,
      isLocalhost: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    };

    setResults(testResults);
    setTesting(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-[9999] flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        <Camera className="w-5 h-5" />
        <span className="font-semibold">Test Camera</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[100000] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      
      <div className="relative w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-purple-500/50 rounded-2xl shadow-2xl">
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 flex items-center justify-between border-b border-purple-500/50">
          <div className="flex items-center gap-3">
            <Camera className="w-6 h-6 text-white" />
            <h2 className="text-xl font-bold text-white">Camera Diagnostic Test</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="p-6">
          {!results && !testing && (
            <div className="text-center py-12">
              <Camera className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <p className="text-slate-300 mb-6">
                This will test if camera access works in this environment
              </p>
              <button
                onClick={runTests}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                Run Diagnostic Tests
              </button>
            </div>
          )}

          {testing && (
            <div className="text-center py-12">
              <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-slate-300">Running tests...</p>
            </div>
          )}

          {results && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <h3 className="font-semibold text-slate-200 mb-2">Environment Info</h3>
                <div className="space-y-1 text-sm text-slate-400">
                  <div><strong>Protocol:</strong> {results.environment.protocol}</div>
                  <div><strong>Hostname:</strong> {results.environment.hostname}</div>
                  <div><strong>Localhost:</strong> {results.environment.isLocalhost ? 'Yes' : 'No'}</div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-slate-200">Test Results</h3>
                {Object.entries(results.tests).map(([key, test]: [string, any]) => (
                  <div
                    key={key}
                    className={`p-4 rounded-xl border-2 ${
                      test.critical
                        ? 'bg-red-900/20 border-red-500/50'
                        : test.passed
                        ? 'bg-green-900/20 border-green-500/50'
                        : test.warning
                        ? 'bg-yellow-900/20 border-yellow-500/50'
                        : 'bg-slate-800/50 border-slate-600'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        {test.critical ? (
                          <XCircle className="w-5 h-5 text-red-400" />
                        ) : test.passed ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : test.warning ? (
                          <AlertCircle className="w-5 h-5 text-yellow-400" />
                        ) : (
                          <XCircle className="w-5 h-5 text-slate-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-200 mb-1">{test.name}</h4>
                        <p className="text-sm text-slate-400">{test.details}</p>
                        {test.state && (
                          <div className="mt-2 text-xs">
                            <span className="px-2 py-1 bg-slate-700 rounded text-slate-300">
                              State: {test.state}
                            </span>
                          </div>
                        )}
                        {test.devices && test.devices.length > 0 && (
                          <div className="mt-2 space-y-1">
                            {test.devices.map((device: any, i: number) => (
                              <div key={i} className="text-xs text-slate-400">
                                📹 {device.label || 'Camera ' + (i + 1)}
                              </div>
                            ))}
                          </div>
                        )}
                        {test.tracks && test.tracks.length > 0 && (
                          <div className="mt-2 space-y-1">
                            {test.tracks.map((track: any, i: number) => (
                              <div key={i} className="text-xs text-slate-400">
                                🎥 {track.label} ({track.readyState})
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={runTests}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Run Again
                </button>
                <button
                  onClick={() => {
                    console.log('Camera Diagnostic Results:', results);
                    alert('Results logged to console (F12)');
                  }}
                  className="px-6 py-3 bg-slate-700 text-white rounded-xl font-semibold hover:bg-slate-600 transition-colors"
                >
                  Log to Console
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

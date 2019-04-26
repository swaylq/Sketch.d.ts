/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpeechRecognizerVars<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    locale<R = NSLocale>(): R;
    setLocale<R = void, P0 = NSLocale>(_v: P0): R;
    recognizer<R = __RXRecognizer>(): R;
    setRecognizer<R = void, P0 = __RXRecognizer>(_v: P0): R;
    recognitionSystem<R = __RXRecognitionSystem>(): R;
    setRecognitionSystem<R = void, P0 = __RXRecognitionSystem>(_v: P0): R;
    displayedStringsTitle<R = NSString>(): R;
    setDisplayedStringsTitle<R = void, P0 = NSString>(_v: P0): R;
    displayedStringsArray<R = NSArray>(): R;
    setDisplayedStringsArray<R = void, P0 = NSArray>(_v: P0): R;
    simpleCommandsArray<R = NSArray>(): R;
    setSimpleCommandsArray<R = void, P0 = NSArray>(_v: P0): R;
    delegate<R = NSSpeechRecognizerDelegate>(): R;
    setDelegate<R = void, P0 = NSSpeechRecognizerDelegate>(_v: P0): R;
  }
  namespace NSSpeechRecognizerVars {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSSpeechRecognizerVars>(): R;
      new: <R = NSSpeechRecognizerVars>() => R;
    }
  }
}

declare const NSSpeechRecognizerVars: cocoa.NSSpeechRecognizerVars.CLASS;

/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpeechRecognizer<T0 = void, T1 = void, T2 = void> extends NSObject {
    _updateCommandDisplayWithRecognizer<R = void>(): R;
    stopListening<R = void>(): R;
    startListening<R = void>(): R;
    dealloc<R = void>(): R;
    _processRecognitionResult<R = void, P0 = __RXLanguageObject>(__processRecognitionResult: P0): R;
    blocksOtherRecognizers<R = boolean>(): R;
    setBlocksOtherRecognizers<R = void, P0 = boolean>(_v: P0): R;
    listensInForegroundOnly<R = boolean>(): R;
    setListensInForegroundOnly<R = void, P0 = boolean>(_v: P0): R;
    displayedCommandsTitle<R = NSString>(): R;
    setDisplayedCommandsTitle<R = void, P0 = NSString>(_v: P0): R;
    commands<R = NSArray>(): R;
    setCommands<R = void, P0 = NSArray>(_v: P0): R;
    delegate<R = NSSpeechRecognizerDelegate>(): R;
    setDelegate<R = void, P0 = NSSpeechRecognizerDelegate>(_v: P0): R;
  }
  namespace NSSpeechRecognizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSSpeechRecognizer>(): R;
      new: <R = NSSpeechRecognizer>() => R;
    }
  }
}

declare const NSSpeechRecognizer: cocoa.NSSpeechRecognizer.CLASS;

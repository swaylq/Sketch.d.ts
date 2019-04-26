/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpeechSynthesizer<T0 = void, T1 = void, T2 = void> extends NSObject {
    _setObject_forProperty_usingDataSize<R = boolean, P0 = unknown, P1 = number, P2 = number>(__setObject: P0, _forProperty: P1, _usingDataSize: P2): R;
    _objectForProperty_usingDataSize_withRequestedObjectClass<R = unknown, P0 = number, P1 = number, P2 = unknown>(__objectForProperty: P0, _usingDataSize: P1, _withRequestedObjectClass: P2): R;
    _continueSpeaking<R = void>(): R;
    _pauseSpeakingAtBoundary<R = void, P0 = number>(__pauseSpeakingAtBoundary: P0): R;
    _stopSpeakingAtBoundary<R = void, P0 = number>(__stopSpeakingAtBoundary: P0): R;
    _volume<R = number>(): R;
    _setVolume<R = void, P0 = number>(__setVolume: P0): R;
    _rate<R = number>(): R;
    _setRate<R = void, P0 = number>(__setRate: P0): R;
    _pitchBase<R = number>(): R;
    _setPitchBase<R = void, P0 = number>(__setPitchBase: P0): R;
    _normalSpeakingRate<R = number>(): R;
    _handleDefaultVoiceChange<R = void>(): R;
    _setupCallbacks<R = void>(): R;
    _beginSpeakingString_optionallyToURL<R = boolean, P0 = unknown, P1 = unknown>(__beginSpeakingString: P0, _optionallyToURL: P1): R;
    _handleSyncCallbackWithMessage<R = void, P0 = number>(__handleSyncCallbackWithMessage: P0): R;
    _handleErrorCallbackWithParams<R = void, P0 = unknown>(__handleErrorCallbackWithParams: P0): R;
    _handlePhonemeCallbackWithOpcode<R = void, P0 = number>(__handlePhonemeCallbackWithOpcode: P0): R;
    _handleWordCallbackWithParams<R = void, P0 = unknown>(__handleWordCallbackWithParams: P0): R;
    _handleSpeechDoneCallback<R = void>(): R;
    _feedbackWindowIsVisible<R = boolean>(): R;
    setObject_forProperty_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_setObject: P0, _forProperty: P1, _error: P2): R;
    objectForProperty_error<R = unknown, P0 = unknown, P1 = unknown>(_objectForProperty: P0, _error: P1): R;
    phonemesFromText<R = unknown, P0 = unknown>(_phonemesFromText: P0): R;
    addSpeechDictionary<R = void, P0 = unknown>(_addSpeechDictionary: P0): R;
    setVoice<R = boolean, P0 = unknown>(_setVoice: P0): R;
    voice<R = unknown>(): R;
    continueSpeaking<R = void>(): R;
    pauseSpeakingAtBoundary<R = void, P0 = number>(_pauseSpeakingAtBoundary: P0): R;
    stopSpeakingAtBoundary<R = void, P0 = number>(_stopSpeakingAtBoundary: P0): R;
    stopSpeaking<R = void>(): R;
    startSpeakingString_toURL<R = boolean, P0 = unknown, P1 = unknown>(_startSpeakingString: P0, _toURL: P1): R;
    startSpeakingString<R = boolean, P0 = unknown>(_startSpeakingString: P0): R;
    dealloc<R = void>(): R;
    initWithVoice<R = unknown, P0 = unknown>(_initWithVoice: P0): R;
    usesFeedbackWindow<R = boolean>(): R;
    setUsesFeedbackWindow<R = void, P0 = boolean>(_v: P0): R;
    volume<R = number>(): R;
    setVolume<R = void, P0 = number>(_v: P0): R;
    rate<R = number>(): R;
    setRate<R = void, P0 = number>(_v: P0): R;
    delegate<R = NSSpeechSynthesizerDelegate>(): R;
    setDelegate<R = void, P0 = NSSpeechSynthesizerDelegate>(_v: P0): R;
    speaking<R = boolean>(): R;
  }
  namespace NSSpeechSynthesizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSSpeechSynthesizer>(): R;
      new: <R = NSSpeechSynthesizer>() => R;
      attributesForVoice<R = unknown, P0 = unknown>(_attributesForVoice: P0): R;
      availableVoices<R = unknown>(): R;
      defaultVoice<R = unknown>(): R;
      isAnyApplicationSpeaking<R = boolean>(): R;
    }
  }
}

declare const NSSpeechSynthesizer: cocoa.NSSpeechSynthesizer.CLASS;

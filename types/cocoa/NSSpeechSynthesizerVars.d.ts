/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpeechSynthesizerVars<T0 = void, T1 = void, T2 = void> extends NSObject {
    setSpeechChannelWithVoiceCreator_voiceID<R = number, P0 = number, P1 = number>(_setSpeechChannelWithVoiceCreator: P0, _voiceID: P1): R;
    setSpeechChannelWithVoiceIdentifier<R = number, P0 = unknown>(_setSpeechChannelWithVoiceIdentifier: P0): R;
    dealloc<R = void>(): R;
    speechFeedbackServicesInvoker<R = _NSPeriodicInvoker>(): R;
    setSpeechFeedbackServicesInvoker<R = void, P0 = _NSPeriodicInvoker>(_v: P0): R;
    synthesizerIsRetained<R = boolean>(): R;
    setSynthesizerIsRetained<R = void, P0 = boolean>(_v: P0): R;
    speechFinishedSuccessfully<R = boolean>(): R;
    setSpeechFinishedSuccessfully<R = void, P0 = boolean>(_v: P0): R;
    needsResyncWithDefaultVoice<R = boolean>(): R;
    setNeedsResyncWithDefaultVoice<R = void, P0 = boolean>(_v: P0): R;
    speakingSpeechFeedbackServices<R = boolean>(): R;
    setSpeakingSpeechFeedbackServices<R = void, P0 = boolean>(_v: P0): R;
    usesFeedbackWindow<R = boolean>(): R;
    setUsesFeedbackWindow<R = void, P0 = boolean>(_v: P0): R;
    usingDefaultVoice<R = boolean>(): R;
    setUsingDefaultVoice<R = void, P0 = boolean>(_v: P0): R;
    normalSpeakingRate<R = number>(): R;
    currentVoiceIdentifier<R = NSString>(): R;
    setCurrentVoiceIdentifier<R = void, P0 = NSString>(_v: P0): R;
    speechFeedbackServicesRef<R = number>(): R;
    speechChannel<R = SpeechChannelRecord>(): R;
    delegate<R = NSSpeechSynthesizerDelegate>(): R;
    setDelegate<R = void, P0 = NSSpeechSynthesizerDelegate>(_v: P0): R;
  }
  namespace NSSpeechSynthesizerVars {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSSpeechSynthesizerVars>(): R;
      new: <R = NSSpeechSynthesizerVars>() => R;
      voiceIdentifierForVoiceCreator_voiceID<R = unknown, P0 = number, P1 = number>(_voiceIdentifierForVoiceCreator: P0, _voiceID: P1): R;
      findVoiceByIdentifier_returningCreator_returningID<R = boolean, P0 = unknown, P1 = number, P2 = number>(_findVoiceByIdentifier: P0, _returningCreator: P1, _returningID: P2): R;
    }
  }
}

declare const NSSpeechSynthesizerVars: cocoa.NSSpeechSynthesizerVars.CLASS;

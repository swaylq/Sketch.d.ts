/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONUnarchiver<T0 = void, T1 = void, T2 = void> extends MSBaseUnarchiver, BCJSONDecoderDelegateProtocol {
    setArchiveVersion<R = void, P0 = number>(_setArchiveVersion: P0): R;
    referenceObjectWithIdentifier<R = unknown, P0 = unknown>(_referenceObjectWithIdentifier: P0): R;
    decodeReferenceObjectOfClass_withIdentifier<R = unknown, P0 = unknown, P1 = unknown>(_decodeReferenceObjectOfClass: P0, _withIdentifier: P1): R;
    addReference_withIdentifier<R = void, P0 = unknown, P1 = unknown>(_addReference: P0, _withIdentifier: P1): R;
    isClass_inAllowedSet<R = boolean, P0 = unknown, P1 = unknown>(_isClass: P0, _inAllowedSet: P1): R;
    allowedClasses<R = NSSet>(): R;
    setAllowedClasses<R = void, P0 = NSSet>(_v: P0): R;
    references<R = NSMutableDictionary>(): R;
    setReferences<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    decoder<R = BCJSONDecoder>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSJSONUnarchiver {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseUnarchiver, BCJSONDecoderDelegateProtocol {
      alloc<R = MSJSONUnarchiver>(): R;
      new: <R = MSJSONUnarchiver>() => R;
      unarchiverFromCoder<R = unknown, P0 = unknown>(_unarchiverFromCoder: P0): R;
      defineReplacementClasses<R = void>(): R;
      load<R = void>(): R;
    }
  }
}

declare const MSJSONUnarchiver: cocoa.MSJSONUnarchiver.CLASS;

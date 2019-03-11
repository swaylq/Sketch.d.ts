/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONUnarchiver<T = any> extends cocoa.MSBaseUnarchiver, cocoa.BCJSONDecoderDelegateProtocol {
    setArchiveVersion<R = void, P0 = number>(_setArchiveVersion: P0): R;
    referenceObjectWithIdentifier<R = unknown, P0 = unknown>(_referenceObjectWithIdentifier: P0): R;
    decodeReferenceObjectOfClass_withIdentifier<R = unknown, P0 = unknown, P1 = unknown>(_decodeReferenceObjectOfClass: P0, _withIdentifier: P1): R;
    addReference_withIdentifier<R = void, P0 = unknown, P1 = unknown>(_addReference: P0, _withIdentifier: P1): R;
    isClass_inAllowedSet<R = boolean, P0 = unknown, P1 = unknown>(_isClass: P0, _inAllowedSet: P1): R;
    allowedClasses<R = cocoa.NSSet>(): R;
    setAllowedClasses<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    references<R = cocoa.NSMutableDictionary>(): R;
    setReferences<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
    decoder<R = cocoa.BCJSONDecoder>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSJSONUnarchiver<T = any> extends cocoa.classes.MSBaseUnarchiver, cocoa.classes.BCJSONDecoderDelegateProtocol {
      alloc<R = MSJSONUnarchiver>(): R;
      new: <R = MSJSONUnarchiver>() => R;
      unarchiverFromCoder<R = unknown, P0 = unknown>(_unarchiverFromCoder: P0): R;
      defineReplacementClasses<R = void>(): R;
      load<R = void>(): R;
    }
  }
}

declare const MSJSONUnarchiver: cocoa.classes.MSJSONUnarchiver;

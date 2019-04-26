/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCRSASHA1Verify<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    verify<R = void>(): R;
    dealloc<R = void>(): R;
    initWithInputData_publicKey_signatureData<R = unknown, P0 = unknown, P1 = OpaqueSecKeyRef, P2 = unknown>(_initWithInputData: P0, _publicKey: P1, _signatureData: P2): R;
    signatureData<R = NSData>(): R;
    setSignatureData<R = void, P0 = NSData>(_v: P0): R;
    publicKey<R = OpaqueSecKeyRef>(): R;
    setPublicKey<R = void, P0 = OpaqueSecKeyRef>(_v: P0): R;
    inputData<R = NSData>(): R;
    setInputData<R = void, P0 = NSData>(_v: P0): R;
    verified<R = boolean>(): R;
    setVerified<R = void, P0 = boolean>(_v: P0): R;
    error<R = NSError>(): R;
    setError<R = void, P0 = NSError>(_v: P0): R;
  }
  namespace BCRSASHA1Verify {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = BCRSASHA1Verify>(): R;
      new: <R = BCRSASHA1Verify>() => R;
    }
  }
}

declare const BCRSASHA1Verify: cocoa.BCRSASHA1Verify.CLASS;

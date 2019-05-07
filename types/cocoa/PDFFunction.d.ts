/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface PDFFunction<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    mapInputs_toOutputs<R = void, P0 = number, P1 = number>(_mapInputs: P0, _toOutputs: P1): R;
    setupStitchedWithDictionary<R = void, P0 = unknown>(_setupStitchedWithDictionary: P0): R;
    valueForX_c0_c1_n<R = number, P0 = number, P1 = number, P2 = number, P3 = number>(_valueForX: P0, _c0: P1, _c1: P2, _n: P3): R;
    setupExponentialWithDictionary<R = void, P0 = unknown>(_setupExponentialWithDictionary: P0): R;
    extractParameters<R = void, P0 = unknown>(_extractParameters: P0): R;
    setupSampledWithDictionary<R = void, P0 = unknown>(_setupSampledWithDictionary: P0): R;
    setupWithDictionary<R = void, P0 = unknown>(_setupWithDictionary: P0): R;
    setupWithStream<R = void, P0 = unknown>(_setupWithStream: P0): R;
    initWithInfo<R = unknown, P0 = unknown>(_initWithInfo: P0): R;
    range<R = NSArray>(): R;
    setRange<R = void, P0 = NSArray>(_v: P0): R;
    domain<R = NSArray>(): R;
    setDomain<R = void, P0 = NSArray>(_v: P0): R;
    numberOfSamples<R = number>(): R;
    setNumberOfSamples<R = void, P0 = number>(_v: P0): R;
    bytesPerSample<R = number>(): R;
    setBytesPerSample<R = void, P0 = number>(_v: P0): R;
    bytesPerSampleComponent<R = number>(): R;
    setBytesPerSampleComponent<R = void, P0 = number>(_v: P0): R;
    bitsPerSample<R = number>(): R;
    setBitsPerSample<R = void, P0 = number>(_v: P0): R;
    numberOfOutputComponents<R = number>(): R;
    setNumberOfOutputComponents<R = void, P0 = number>(_v: P0): R;
    numberOfInputComponents<R = number>(): R;
    setNumberOfInputComponents<R = void, P0 = number>(_v: P0): R;
    parameters<R = NSDictionary>(): R;
    setParameters<R = void, P0 = NSDictionary>(_v: P0): R;
    samples<R = NSData>(): R;
    setSamples<R = void, P0 = NSData>(_v: P0): R;
  }
  namespace PDFFunction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = PDFFunction>(): R;
      new: <R = PDFFunction>() => R;
      functionWithInfo<R = unknown, P0 = unknown>(_functionWithInfo: P0): R;
    }
  }
}

declare const PDFFunction: cocoa.PDFFunction.CLASS;

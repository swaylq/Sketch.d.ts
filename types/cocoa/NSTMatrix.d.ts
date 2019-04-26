/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTMatrix<T0 = void, T1 = void, T2 = void> extends NSObject {
    invert<R = unknown>(): R;
    multiplyRowBy_x<R = void, P0 = number, P1 = number>(_multiplyRowBy: P0, _x: P1): R;
    swapRows_b<R = void, P0 = number, P1 = number>(_swapRows: P0, _b: P1): R;
    addScaledRowToRow_a_b<R = void, P0 = number, P1 = number, P2 = number>(_addScaledRowToRow: P0, _a: P1, _b: P2): R;
    setValue_atRow_column<R = void, P0 = number, P1 = number, P2 = number>(_setValue: P0, _atRow: P1, _column: P2): R;
    valueAtRow_columns<R = number, P0 = number, P1 = number>(_valueAtRow: P0, _columns: P1): R;
    makeIdentity<R = void>(): R;
    resizeWithRows_columns<R = void, P0 = number, P1 = number>(_resizeWithRows: P0, _columns: P1): R;
    dealloc<R = void>(): R;
    initWitRows_columns<R = unknown, P0 = number, P1 = number>(_initWitRows: P0, _columns: P1): R;
  }
  namespace NSTMatrix {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTMatrix>(): R;
      new: <R = NSTMatrix>() => R;
      crossProduct_b<R = unknown, P0 = unknown, P1 = unknown>(_crossProduct: P0, _b: P1): R;
    }
  }
}

declare const NSTMatrix: cocoa.NSTMatrix.CLASS;

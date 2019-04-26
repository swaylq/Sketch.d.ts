/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCRounder<T0 = void, T1 = void, T2 = void> {
    // + BCRounder(MSVectorRounding): 
    roundedPoint_coordinateSpace_inCoordinateSpace<R = CGPoint, P0 = CGPoint, P1 = unknown, P2 = unknown>(_roundedPoint: P0, _coordinateSpace: P1, _inCoordinateSpace: P2): R;
  }
  namespace BCRounder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + BCRounder(MSVectorRounding): 
      vectorRounder<R = unknown>(): R;
      rounderWithPrecision<R = unknown, P0 = number>(_rounderWithPrecision: P0): R;
    }
  }
}

declare const BCRounder: cocoa.BCRounder.CLASS;

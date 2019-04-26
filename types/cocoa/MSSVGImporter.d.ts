/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGImporter<T0 = void, T1 = void, T2 = void> extends NSObject, MSImporterProtocol {
    cxx_destruct<R = void>(): R;
    scale_rootGroup<R = void, P0 = number, P1 = unknown>(_scale: P0, _rootGroup: P1): R;
    graph<R = SVGElement>(): R;
    setGraph<R = void, P0 = SVGElement>(_v: P0): R;
    importer<R = SVGImporter>(): R;
    setImporter<R = void, P0 = SVGImporter>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSSVGImporter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSImporterProtocol {
      alloc<R = MSSVGImporter>(): R;
      new: <R = MSSVGImporter>() => R;
      svgImporter<R = unknown>(): R;
    }
  }
}

declare const MSSVGImporter: cocoa.MSSVGImporter.CLASS;

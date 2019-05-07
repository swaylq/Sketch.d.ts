/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentImporter<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    showProgressSheet<R = unknown>(): R;
    importerDidFinish<R = void>(): R;
    close<R = void>(): R;
    collapseSinglePage<R = void>(): R;
    expandPages<R = boolean>(): R;
    run<R = void>(): R;
    addedLayers<R = NSArray>(): R;
    setAddedLayers<R = void, P0 = NSArray>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
    sheet<R = CHProgressSheet>(): R;
    setSheet<R = void, P0 = CHProgressSheet>(_v: P0): R;
    fileURL<R = NSURL>(): R;
    setFileURL<R = void, P0 = NSURL>(_v: P0): R;
    importer<R = MSImporter>(): R;
    setImporter<R = void, P0 = MSImporter>(_v: P0): R;
    group<R = MSLayerGroup>(): R;
    setGroup<R = void, P0 = MSLayerGroup>(_v: P0): R;
    view<R = MSContentDrawView>(): R;
  }
  namespace MSDocumentImporter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSDocumentImporter>(): R;
      new: <R = MSDocumentImporter>() => R;
      importFromURL_inPage_importer<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_importFromURL: P0, _inPage: P1, _importer: P2): R;
    }
  }
}

declare const MSDocumentImporter: cocoa.MSDocumentImporter.CLASS;

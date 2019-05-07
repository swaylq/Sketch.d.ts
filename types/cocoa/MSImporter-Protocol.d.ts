/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImporterProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    importAsLayer<R = MSLayer>(): R;
    shouldCollapseSinglePage<R = boolean>(): R;
    shouldExpandPages<R = boolean>(): R;
    secondPhaseSubtitleForValue_maximum<R = NSString, P0 = number, P1 = number>(_secondPhaseSubtitleForValue: P0, _maximum: P1): R;
    firstPhaseSubtitle<R = NSString>(): R;
    finishImporting<R = void>(): R;
    importIntoPage_name_progress<R = void, P0 = MSPage, P1 = NSString, P2 = CDUnknownBlockType>(_importIntoPage: P0, _name: P1, _progress: P2): R;
    prepareToImportFromURL<R = number, P0 = NSURL>(_prepareToImportFromURL: P0): R;
    prepareToImportFromData<R = number, P0 = NSData>(_prepareToImportFromData: P0): R;
  }
  namespace MSImporterProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}

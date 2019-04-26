/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardReaderProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    pasteboardDataFromPasteboard_colorSpace_options_sender<R = MSPasteboardLayers, P0 = NSPasteboard, P1 = NSColorSpace, P2 = number, P3 = NSDraggingInfo>(_pasteboardDataFromPasteboard: P0, _colorSpace: P1, _options: P2, _sender: P3): R;
    supportedPasteboardTypes<R = NSArray>(): R;
  }
  namespace MSPasteboardReaderProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}

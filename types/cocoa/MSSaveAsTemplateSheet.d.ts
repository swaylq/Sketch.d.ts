/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSaveAsTemplateSheet<T0 = void, T1 = void, T2 = void> extends CHSheetController {
    inputField<R = NSTextField>(): R;
    setInputField<R = void, P0 = NSTextField>(_v: P0): R;
    inputCompletionBlock<R = CDUnknownBlockType>(): R;
    setInputCompletionBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace MSSaveAsTemplateSheet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CHSheetController {
      alloc<R = MSSaveAsTemplateSheet>(): R;
      new: <R = MSSaveAsTemplateSheet>() => R;
      runForDocument_completionBlock<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_runForDocument: P0, _completionBlock: P1): R;
    }
  }
}

declare const MSSaveAsTemplateSheet: cocoa.MSSaveAsTemplateSheet.CLASS;

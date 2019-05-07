/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSEditColorSpaceSheetController<T0 = void, T1 = void, T2 = void> extends CHSheetController {
    viewDocumentation<R = void, P0 = unknown>(_viewDocumentation: P0): R;
    disableUI<R = void>(): R;
    showOptionsViewIfAppropriate<R = void>(): R;
    refreshDescription<R = void>(): R;
    validateConfirmButton<R = void>(): R;
    pickChangeLogic<R = void, P0 = unknown>(_pickChangeLogic: P0): R;
    pickColorSpace<R = void, P0 = unknown>(_pickColorSpace: P0): R;
    windowDidLoad<R = void>(): R;
    optionsViewHeight<R = number>(): R;
    optionsViewBottomMargin<R = number>(): R;
    convertDescriptionTextField<R = NSTextField>(): R;
    setConvertDescriptionTextField<R = void, P0 = NSTextField>(_v: P0): R;
    convertButton<R = NSButton>(): R;
    setConvertButton<R = void, P0 = NSButton>(_v: P0): R;
    confirmButton<R = NSButton>(): R;
    setConfirmButton<R = void, P0 = NSButton>(_v: P0): R;
    descriptionTextField<R = NSTextField>(): R;
    setDescriptionTextField<R = void, P0 = NSTextField>(_v: P0): R;
    colorSpacePopUpButton<R = NSPopUpButton>(): R;
    setColorSpacePopUpButton<R = void, P0 = NSPopUpButton>(_v: P0): R;
    assignDescriptionTextField<R = NSTextField>(): R;
    setAssignDescriptionTextField<R = void, P0 = NSTextField>(_v: P0): R;
    assignButton<R = NSButton>(): R;
    setAssignButton<R = void, P0 = NSButton>(_v: P0): R;
    optionsViewBottomMarginConstraint<R = NSLayoutConstraint>(): R;
    optionsView<R = NSView>(): R;
    selectedColorSpace<R = number>(): R;
    currentColorSpace<R = number>(): R;
    currentDocument<R = MSDocument>(): R;
  }
  namespace MSEditColorSpaceSheetController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CHSheetController {
      alloc<R = MSEditColorSpaceSheetController>(): R;
      new: <R = MSEditColorSpaceSheetController>() => R;
    }
  }
}

declare const MSEditColorSpaceSheetController: cocoa.MSEditColorSpaceSheetController.CLASS;

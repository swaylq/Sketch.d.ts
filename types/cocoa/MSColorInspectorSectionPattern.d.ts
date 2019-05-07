/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorSectionPattern<T0 = void, T1 = void, T2 = void> extends MSColorInspectorSection, MSFrequentImagesControllerDelegateProtocol {
    updatePatternWellImage<R = void>(): R;
    fillModeAction<R = void, P0 = unknown>(_fillModeAction: P0): R;
    patternWellAction<R = void, P0 = unknown>(_patternWellAction: P0): R;
    choosePatternImage<R = void, P0 = unknown>(_choosePatternImage: P0): R;
    setFillImage<R = void, P0 = unknown>(_setFillImage: P0): R;
    isTiled<R = boolean>(): R;
    enableSectionButtonAction<R = void, P0 = unknown>(_enableSectionButtonAction: P0): R;
    updateChooseImageButton<R = void>(): R;
    mouseAction<R = void, P0 = unknown>(_mouseAction: P0): R;
    showFrequentImages<R = void, P0 = unknown>(_showFrequentImages: P0): R;
    scaleController<R = MSTileScaleViewController>(): R;
    setScaleController<R = void, P0 = MSTileScaleViewController>(_v: P0): R;
    noPatternController<R = NSViewController>(): R;
    setNoPatternController<R = void, P0 = NSViewController>(_v: P0): R;
    frequentImagesController<R = MSFrequentImagesController>(): R;
    setFrequentImagesController<R = void, P0 = MSFrequentImagesController>(_v: P0): R;
    mouseTracker<R = MSMouseTracker>(): R;
    setMouseTracker<R = void, P0 = MSMouseTracker>(_v: P0): R;
    mainViewHeader<R = MSColorHeaderInspectorItem>(): R;
    setMainViewHeader<R = void, P0 = MSColorHeaderInspectorItem>(_v: P0): R;
    frequentImagesButton<R = MSGenericButtonController>(): R;
    setFrequentImagesButton<R = void, P0 = MSGenericButtonController>(_v: P0): R;
    stylesController<R = NSArrayController>(): R;
    setStylesController<R = void, P0 = NSArrayController>(_v: P0): R;
    patternTileButton<R = NSPopUpButton>(): R;
    setPatternTileButton<R = void, P0 = NSPopUpButton>(_v: P0): R;
    choosePatternButton<R = NSButton>(): R;
    setChoosePatternButton<R = void, P0 = NSButton>(_v: P0): R;
    imageCell<R = MSPatternImageCell>(): R;
    setImageCell<R = void, P0 = MSPatternImageCell>(_v: P0): R;
    patternWell<R = NSImageView>(): R;
    setPatternWell<R = void, P0 = NSImageView>(_v: P0): R;
    frequentImages<R = NSArray>(): R;
    setFrequentImages<R = void, P0 = NSArray>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSColorInspectorSectionPattern {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSColorInspectorSection, MSFrequentImagesControllerDelegateProtocol {
      alloc<R = MSColorInspectorSectionPattern>(): R;
      new: <R = MSColorInspectorSectionPattern>() => R;
    }
  }
}

declare const MSColorInspectorSectionPattern: cocoa.MSColorInspectorSectionPattern.CLASS;

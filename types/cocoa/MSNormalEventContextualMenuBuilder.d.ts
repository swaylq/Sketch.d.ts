/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNormalEventContextualMenuBuilder<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    symbolInstanceOnlyItems<R = unknown>(): R;
    symbolItems<R = unknown>(): R;
    groupOnlyItems<R = unknown>(): R;
    imageOnlyItems<R = unknown>(): R;
    textOnlyItems<R = unknown>(): R;
    noSelectionItems<R = unknown>(): R;
    distributeItems<R = unknown>(): R;
    alignItems<R = unknown>(): R;
    lockHideItems<R = unknown>(): R;
    maskItems<R = unknown>(): R;
    transformItems<R = unknown>(): R;
    groupRenameItems<R = unknown>(): R;
    pasteCopyStyleItems<R = unknown>(): R;
    moveForwardBackwardItems<R = unknown>(): R;
    pickLayerItems<R = unknown>(): R;
    cutCopyPasteItems<R = unknown>(): R;
    replaceWithSymbolItems<R = unknown>(): R;
    menuWithItemGroups<R = unknown, P0 = unknown>(_menuWithItemGroups: P0): R;
    dataFeedsItems<R = unknown>(): R;
    standardMenuItemGroups<R = unknown>(): R;
    constructMenus<R = void>(): R;
    menuForLayers<R = unknown, P0 = unknown>(_menuForLayers: P0): R;
    sliceMenu<R = NSMenu>(): R;
    setSliceMenu<R = void, P0 = NSMenu>(_v: P0): R;
    artboardMenu<R = NSMenu>(): R;
    setArtboardMenu<R = void, P0 = NSMenu>(_v: P0): R;
    symbolInstanceMenu<R = NSMenu>(): R;
    setSymbolInstanceMenu<R = void, P0 = NSMenu>(_v: P0): R;
    imageLayerMenu<R = NSMenu>(): R;
    setImageLayerMenu<R = void, P0 = NSMenu>(_v: P0): R;
    noSelectionMenu<R = NSMenu>(): R;
    setNoSelectionMenu<R = void, P0 = NSMenu>(_v: P0): R;
    multipleSelectionMenu<R = NSMenu>(): R;
    setMultipleSelectionMenu<R = void, P0 = NSMenu>(_v: P0): R;
    groupLayerMenu<R = NSMenu>(): R;
    setGroupLayerMenu<R = void, P0 = NSMenu>(_v: P0): R;
    textLayerMenu<R = NSMenu>(): R;
    setTextLayerMenu<R = void, P0 = NSMenu>(_v: P0): R;
    standardLayerMenu<R = NSMenu>(): R;
    setStandardLayerMenu<R = void, P0 = NSMenu>(_v: P0): R;
  }
  namespace classes {
    export interface MSNormalEventContextualMenuBuilder<T = any> extends NSObject {
      alloc<R = MSNormalEventContextualMenuBuilder>(): R;
      new: <R = MSNormalEventContextualMenuBuilder>() => R;
    }
  }
}

declare const MSNormalEventContextualMenuBuilder: cocoa.classes.MSNormalEventContextualMenuBuilder;

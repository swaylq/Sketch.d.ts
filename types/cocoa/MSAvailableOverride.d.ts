/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAvailableOverride<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    initWithOverridePoint_master_affectedLayer_overrideValue_otherOverrides_inParent_document_editable<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown, P6 = unknown, P7 = boolean>(_initWithOverridePoint: P0, _master: P1, _affectedLayer: P2, _overrideValue: P3, _otherOverrides: P4, _inParent: P5, _document: P6, _editable: P7): R;
    affectedLayerDefault<R = unknown>(): R;
    internalOverrideValue<R = MSOverrideValue>(): R;
    isEditable<R = boolean>(): R;
    overridePoint<R = MSOverridePoint>(): R;
    affectedLayer<R = MSImmutableLayer>(): R;
    master<R = MSImmutableSymbolMaster>(): R;
    parent<R = MSAvailableOverride>(): R;
    defaultIsItselfAnOverride<R = boolean>(): R;
    hasOverride<R = boolean>(): R;
    overrideValue<R = unknown>(): R;
    defaultValue<R = unknown>(): R;
    currentValue<R = unknown>(): R;
    children<R = NSArray>(): R;
    // + MSAvailableOverride(SharedStyle): 
    currentSharedStyle_libraryController<R = unknown, P0 = unknown, P1 = unknown>(_currentSharedStyle: P0, _libraryController: P1): R;
    importableDefaultSharedStyle_libraryController<R = unknown, P0 = unknown, P1 = unknown>(_importableDefaultSharedStyle: P0, _libraryController: P1): R;
    symbolDefaultSharedStyle_libraryController<R = unknown, P0 = unknown, P1 = unknown>(_symbolDefaultSharedStyle: P0, _libraryController: P1): R;
    originalSharedStyle_libraryController<R = unknown, P0 = unknown, P1 = unknown>(_originalSharedStyle: P0, _libraryController: P1): R;
    libraryForStyleWithID_inDocument_libraryController<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_libraryForStyleWithID: P0, _inDocument: P1, _libraryController: P2): R;
    libraryForOwningSymbolIn_libraryController<R = unknown, P0 = unknown, P1 = unknown>(_libraryForOwningSymbolIn: P0, _libraryController: P1): R;
    sharedStyleWithID_inDocument<R = unknown, P0 = unknown, P1 = unknown>(_sharedStyleWithID: P0, _inDocument: P1): R;
    // + MSAvailableOverride(DataType):
    dataType<R = number>(): R;
  }
  namespace MSAvailableOverride {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSAvailableOverride>(): R;
      new: <R = MSAvailableOverride>() => R;
      enumerateOverrides_withBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_enumerateOverrides: P0, _withBlock: P1): R;
      flattenAvailableOverrides<R = unknown, P0 = unknown>(_flattenAvailableOverrides: P0): R;
      availableOverrideWithOverridePoint_master_overrideValue_otherOverrides_inParent_document<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown>(_availableOverrideWithOverridePoint: P0, _master: P1, _overrideValue: P2, _otherOverrides: P3, _inParent: P4, _document: P5): R;
  
  }
  }
}

declare const MSAvailableOverride: cocoa.MSAvailableOverride.CLASS;

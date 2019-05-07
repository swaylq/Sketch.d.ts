/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSAssetCollection<T0 = void, T1 = void, T2 = void> extends MSModelObject {
    moveGradientIndex_toIndex<R = void, P0 = number, P1 = number>(_moveGradientIndex: P0, _toIndex: P1): R;
    removeAllGradients<R = void>(): R;
    removeGradientsAtIndexes<R = void, P0 = unknown>(_removeGradientsAtIndexes: P0): R;
    removeGradientAtIndex<R = void, P0 = number>(_removeGradientAtIndex: P0): R;
    removeGradient<R = void, P0 = unknown>(_removeGradient: P0): R;
    insertGradients_afterGradient<R = void, P0 = unknown, P1 = unknown>(_insertGradients: P0, _afterGradient: P1): R;
    insertGradient_afterGradient<R = void, P0 = unknown, P1 = unknown>(_insertGradient: P0, _afterGradient: P1): R;
    insertGradients_beforeGradient<R = void, P0 = unknown, P1 = unknown>(_insertGradients: P0, _beforeGradient: P1): R;
    insertGradient_beforeGradient<R = void, P0 = unknown, P1 = unknown>(_insertGradient: P0, _beforeGradient: P1): R;
    insertGradient_atIndex<R = void, P0 = unknown, P1 = number>(_insertGradient: P0, _atIndex: P1): R;
    addGradients<R = void, P0 = unknown>(_addGradients: P0): R;
    addGradient<R = void, P0 = unknown>(_addGradient: P0): R;
    moveExportPresetIndex_toIndex<R = void, P0 = number, P1 = number>(_moveExportPresetIndex: P0, _toIndex: P1): R;
    removeAllExportPresets<R = void>(): R;
    removeExportPresetsAtIndexes<R = void, P0 = unknown>(_removeExportPresetsAtIndexes: P0): R;
    removeExportPresetAtIndex<R = void, P0 = number>(_removeExportPresetAtIndex: P0): R;
    removeExportPreset<R = void, P0 = unknown>(_removeExportPreset: P0): R;
    insertExportPresets_afterExportPreset<R = void, P0 = unknown, P1 = unknown>(_insertExportPresets: P0, _afterExportPreset: P1): R;
    insertExportPreset_afterExportPreset<R = void, P0 = unknown, P1 = unknown>(_insertExportPreset: P0, _afterExportPreset: P1): R;
    insertExportPresets_beforeExportPreset<R = void, P0 = unknown, P1 = unknown>(_insertExportPresets: P0, _beforeExportPreset: P1): R;
    insertExportPreset_beforeExportPreset<R = void, P0 = unknown, P1 = unknown>(_insertExportPreset: P0, _beforeExportPreset: P1): R;
    insertExportPreset_atIndex<R = void, P0 = unknown, P1 = number>(_insertExportPreset: P0, _atIndex: P1): R;
    addExportPresets<R = void, P0 = unknown>(_addExportPresets: P0): R;
    addExportPreset<R = void, P0 = unknown>(_addExportPreset: P0): R;
    moveColorIndex_toIndex<R = void, P0 = number, P1 = number>(_moveColorIndex: P0, _toIndex: P1): R;
    removeAllColors<R = void>(): R;
    removeColorsAtIndexes<R = void, P0 = unknown>(_removeColorsAtIndexes: P0): R;
    removeColorAtIndex<R = void, P0 = number>(_removeColorAtIndex: P0): R;
    removeColor<R = void, P0 = unknown>(_removeColor: P0): R;
    insertColors_afterColor<R = void, P0 = unknown, P1 = unknown>(_insertColors: P0, _afterColor: P1): R;
    insertColor_afterColor<R = void, P0 = unknown, P1 = unknown>(_insertColor: P0, _afterColor: P1): R;
    insertColors_beforeColor<R = void, P0 = unknown, P1 = unknown>(_insertColors: P0, _beforeColor: P1): R;
    insertColor_beforeColor<R = void, P0 = unknown, P1 = unknown>(_insertColor: P0, _beforeColor: P1): R;
    insertColor_atIndex<R = void, P0 = unknown, P1 = number>(_insertColor: P0, _atIndex: P1): R;
    addColors<R = void, P0 = unknown>(_addColors: P0): R;
    addColor<R = void, P0 = unknown>(_addColor: P0): R;
    hasDefaultValues<R = boolean>(): R;
    imageCollection<R = MSImageCollection>(): R;
    setImageCollection<R = void, P0 = MSImageCollection>(_v: P0): R;
    gradients<R = NSArray>(): R;
    setGradients<R = void, P0 = NSArray>(_v: P0): R;
    exportPresets<R = NSArray>(): R;
    setExportPresets<R = void, P0 = NSArray>(_v: P0): R;
    colors<R = NSArray>(): R;
    setColors<R = void, P0 = NSArray>(_v: P0): R;
    images<R = NSArray>(): R;
    setImages<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace _MSAssetCollection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSModelObject {
      alloc<R = _MSAssetCollection>(): R;
      new: <R = _MSAssetCollection>() => R;
    }
  }
}

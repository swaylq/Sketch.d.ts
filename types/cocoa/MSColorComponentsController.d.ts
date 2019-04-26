/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorComponentsController<T0 = void, T1 = void, T2 = void> extends NSViewController, MSColorComponentAdaptorDelegateProtocol, MSColorModelPickerDelegateProtocol, MSKeyViewProviderProtocol {
    cxx_destruct<R = void>(): R;
    updateUI<R = void>(): R;
    getComponents_forColor<R = void, P0 = number, P1 = unknown>(_getComponents: P0, _forColor: P1): R;
    colorBySettingComponentDisplayValue_atIndex_forColor<R = unknown, P0 = number, P1 = number, P2 = unknown>(_colorBySettingComponentDisplayValue: P0, _atIndex: P1, _forColor: P2): R;
    componentDisplayValueAt_forColor<R = number, P0 = number, P1 = unknown>(_componentDisplayValueAt: P0, _forColor: P1): R;
    setColor_multipleValues<R = void, P0 = unknown, P1 = boolean>(_setColor: P0, _multipleValues: P1): R;
    createAndSetupValueAdaptorForComponentIndex<R = unknown, P0 = number>(_createAndSetupValueAdaptorForComponentIndex: P0): R;
    multipleColors<R = boolean>(): R;
    setMultipleColors<R = void, P0 = boolean>(_v: P0): R;
    modelPickerContainer<R = NSView>(): R;
    setModelPickerContainer<R = void, P0 = NSView>(_v: P0): R;
    modelPicker<R = MSColorModelPicker>(): R;
    setModelPicker<R = void, P0 = MSColorModelPicker>(_v: P0): R;
    hexAdaptor<R = MSInspectorValueAdaptor>(): R;
    setHexAdaptor<R = void, P0 = MSInspectorValueAdaptor>(_v: P0): R;
    hexTransformer<R = MSFlexibleColorHexStringTransformer>(): R;
    setHexTransformer<R = void, P0 = MSFlexibleColorHexStringTransformer>(_v: P0): R;
    hexField<R = NSTextField>(): R;
    setHexField<R = void, P0 = NSTextField>(_v: P0): R;
    component4Adaptor<R = MSMathInspectorValueAdaptor>(): R;
    setComponent4Adaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    component3Adaptor<R = MSMathInspectorValueAdaptor>(): R;
    setComponent3Adaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    component2Adaptor<R = MSMathInspectorValueAdaptor>(): R;
    setComponent2Adaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    component1Adaptor<R = MSMathInspectorValueAdaptor>(): R;
    setComponent1Adaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    colorsController<R = MSAutoSelectingArrayController>(): R;
    setColorsController<R = void, P0 = MSAutoSelectingArrayController>(_v: P0): R;
    component3Label<R = NSTextField>(): R;
    setComponent3Label<R = void, P0 = NSTextField>(_v: P0): R;
    component2Label<R = NSTextField>(): R;
    setComponent2Label<R = void, P0 = NSTextField>(_v: P0): R;
    component1Label<R = NSTextField>(): R;
    setComponent1Label<R = void, P0 = NSTextField>(_v: P0): R;
    component4Field<R = NSTextField>(): R;
    setComponent4Field<R = void, P0 = NSTextField>(_v: P0): R;
    component3Field<R = NSTextField>(): R;
    setComponent3Field<R = void, P0 = NSTextField>(_v: P0): R;
    component2Field<R = NSTextField>(): R;
    setComponent2Field<R = void, P0 = NSTextField>(_v: P0): R;
    component1Field<R = NSTextField>(): R;
    setComponent1Field<R = void, P0 = NSTextField>(_v: P0): R;
    delegate<R = MSColorComponentsControllerDelegate>(): R;
    setDelegate<R = void, P0 = MSColorComponentsControllerDelegate>(_v: P0): R;
    colorModel<R = number>(): R;
    setColorModel<R = void, P0 = number>(_v: P0): R;
    preferredFirstResponder<R = NSView>(): R;
    lastKeyView<R = NSView>(): R;
    firstKeyView<R = NSView>(): R;
    color<R = MSFlexibleColor>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSColorComponentsController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, MSColorComponentAdaptorDelegateProtocol, MSColorModelPickerDelegateProtocol, MSKeyViewProviderProtocol {
      alloc<R = MSColorComponentsController>(): R;
      new: <R = MSColorComponentsController>() => R;
      displayScaleValueForComponentIndex_colorModel<R = number, P0 = number, P1 = number>(_displayScaleValueForComponentIndex: P0, _colorModel: P1): R;
    }
  }
}

declare const MSColorComponentsController: cocoa.MSColorComponentsController.CLASS;

/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPresetPickerViewDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    pickerView_didPickPresetAtIndex<R = void, P0 = MSAssetPickerView, P1 = number>(_pickerView: P0, _didPickPresetAtIndex: P1): R;
    pickerView_removePresetAtIndex<R = void, P0 = MSAssetPickerView, P1 = number>(_pickerView: P0, _removePresetAtIndex: P1): R;
    addPresetForPickerView<R = void, P0 = MSAssetPickerView>(_addPresetForPickerView: P0): R;
    numberOfPresetsInPickerView<R = number, P0 = MSAssetPickerView>(_numberOfPresetsInPickerView: P0): R;
    pickerView_tooltipForPresetButtonAtIndex<R = NSString, P0 = MSAssetPickerView, P1 = number>(_pickerView: P0, _tooltipForPresetButtonAtIndex: P1): R;
    pickerView_didStopHoverPresetAtIndex<R = void, P0 = MSAssetPickerView, P1 = number>(_pickerView: P0, _didStopHoverPresetAtIndex: P1): R;
    pickerView_didHoverPresetAtIndex<R = void, P0 = MSAssetPickerView, P1 = number>(_pickerView: P0, _didHoverPresetAtIndex: P1): R;
    presetPickerFinishedDragging<R = void, P0 = MSAssetPickerView>(_presetPickerFinishedDragging: P0): R;
    pickerView_dragRepresentationForItemAtIndex<R = unknown, P0 = unknown, P1 = number>(_pickerView: P0, _dragRepresentationForItemAtIndex: P1): R;
    pickerView_insertPresetFromDragRepresentation_atIndex<R = boolean, P0 = MSAssetPickerView, P1 = unknown, P2 = number>(_pickerView: P0, _insertPresetFromDragRepresentation: P1, _atIndex: P2): R;
    pickerView_didDragPresetAtIndex_toIndex<R = boolean, P0 = MSAssetPickerView, P1 = number, P2 = number>(_pickerView: P0, _didDragPresetAtIndex: P1, _toIndex: P2): R;
    pickerView_shouldShowMenuForItemAtIndex<R = boolean, P0 = MSAssetPickerView, P1 = number>(_pickerView: P0, _shouldShowMenuForItemAtIndex: P1): R;
    pickerViewSupportsDrop<R = boolean, P0 = MSAssetPickerView>(_pickerViewSupportsDrop: P0): R;
    pickerViewSupportsDrag_fromIndex<R = boolean, P0 = MSAssetPickerView, P1 = number>(_pickerViewSupportsDrag: P0, _fromIndex: P1): R;
    shouldShowAddPresetButton<R = boolean, P0 = MSAssetPickerView>(_shouldShowAddPresetButton: P0): R;
    drawContentForCellInPickerView_withFrame_atIndex_inRect<R = void, P0 = MSAssetPickerView, P1 = boolean, P2 = number, P3 = CGRect>(_drawContentForCellInPickerView: P0, _withFrame: P1, _atIndex: P2, _inRect: P3): R;
  }
  namespace MSPresetPickerViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}

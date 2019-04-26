/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLabelViewCell<T0 = void, T1 = void, T2 = void> extends NSActionCell {
    mouseExited_withFrame_inView<R = void, P0 = unknown, P1 = CGRect, P2 = unknown>(_mouseExited: P0, _withFrame: P1, _inView: P2): R;
    mouseEntered_withFrame_inView<R = void, P0 = unknown, P1 = CGRect, P2 = unknown>(_mouseEntered: P0, _withFrame: P1, _inView: P2): R;
    _handleMouseMovedForEvent_withFrame_inView<R = void, P0 = unknown, P1 = CGRect, P2 = unknown>(__handleMouseMovedForEvent: P0, _withFrame: P1, _inView: P2): R;
    _currentLabelName<R = unknown>(): R;
    _nameForLabelPart<R = unknown, P0 = number>(__nameForLabelPart: P0): R;
    _partAtPoint_inFrame<R = number, P0 = CGPoint, P1 = CGRect>(__partAtPoint: P0, _inFrame: P1): R;
    _drawPart_withFrame<R = void, P0 = number, P1 = CGRect>(__drawPart: P0, _withFrame: P1): R;
    _drawBackgroundForPartRect_isPressedOrHovered<R = void, P0 = CGRect, P1 = boolean>(__drawBackgroundForPartRect: P0, _isPressedOrHovered: P1): R;
    _boundsForLabel_withFrame<R = CGRect, P0 = unknown, P1 = CGRect>(__boundsForLabel: P0, _withFrame: P1): R;
    _labelAttributes<R = unknown>(): R;
    part_boundsWithFrame<R = CGRect, P0 = number, P1 = CGRect>(_part: P0, _boundsWithFrame: P1): R;
    _isHoveredPart<R = boolean, P0 = number>(__isHoveredPart: P0): R;
    _valueChanged<R = void, P0 = unknown>(__valueChanged: P0): R;
    _deselectPart<R = void, P0 = number>(__deselectPart: P0): R;
    _selectPart<R = void, P0 = number>(__selectPart: P0): R;
    _isSelectedPart<R = boolean, P0 = number>(__isSelectedPart: P0): R;
    accessibilityPerformAction_forChild<R = void, P0 = unknown, P1 = unknown>(_accessibilityPerformAction: P0, _forChild: P1): R;
    accessibilitySizeOfChild<R = unknown, P0 = unknown>(_accessibilitySizeOfChild: P0): R;
    accessibilityPositionOfChild<R = unknown, P0 = unknown>(_accessibilityPositionOfChild: P0): R;
    _rectForPart<R = CGRect, P0 = number>(__rectForPart: P0): R;
    accessibilitySetFocus_forChild<R = void, P0 = unknown, P1 = unknown>(_accessibilitySetFocus: P0, _forChild: P1): R;
    accessibilityIsChildFocusable<R = boolean, P0 = unknown>(_accessibilityIsChildFocusable: P0): R;
    accessibilityHelpStringForChild<R = unknown, P0 = unknown>(_accessibilityHelpStringForChild: P0): R;
    accessibilityDescriptionOfChild<R = unknown, P0 = unknown>(_accessibilityDescriptionOfChild: P0): R;
    accessibilityIsVisibleChildrenAttributeSettable<R = boolean>(): R;
    accessibilityVisibleChildrenAttribute<R = unknown>(): R;
    accessibilityIsChildrenAttributeSettable<R = boolean>(): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    allowsMultipleSelection<R = boolean>(): R;
    setAllowsMultipleSelection<R = void, P0 = boolean>(_v: P0): R;
    imagePosition<R = number>(): R;
    setImagePosition<R = void, P0 = number>(_v: P0): R;
    hoveredPart<R = number>(): R;
    setHoveredPart<R = void, P0 = number>(_v: P0): R;
    focusedPart<R = number>(): R;
    setFocusedPart<R = void, P0 = number>(_v: P0): R;
    numParts<R = number>(): R;
    diskLabelValues<R = number>(): R;
    setDiskLabelValues<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSLabelViewCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSActionCell {
      alloc<R = NSLabelViewCell>(): R;
      new: <R = NSLabelViewCell>() => R;
    }
  }
}

declare const NSLabelViewCell: cocoa.NSLabelViewCell.CLASS;

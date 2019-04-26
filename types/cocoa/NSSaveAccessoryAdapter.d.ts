/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSaveAccessoryAdapter<T0 = void, T1 = void, T2 = void> extends NSView {
    _updateConstrainedSize<R = void, P0 = CGSize>(__updateConstrainedSize: P0): R;
    _createHeightConstraint<R = unknown, P0 = number>(__createHeightConstraint: P0): R;
    _createWidthConstraint<R = unknown, P0 = number>(__createWidthConstraint: P0): R;
    heightConstraint<R = NSLayoutConstraint>(): R;
    setHeightConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    widthConstraint<R = NSLayoutConstraint>(): R;
    setWidthConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
  }
  namespace NSSaveAccessoryAdapter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSSaveAccessoryAdapter>(): R;
      new: <R = NSSaveAccessoryAdapter>() => R;
      checkAllowedSize_atPriority_ofView<R = CGSize, P0 = CGSize, P1 = number, P2 = unknown>(_checkAllowedSize: P0, _atPriority: P1, _ofView: P2): R;
      _constraintAccessoryViewWantsCentering_collapsePriority_constraintsCreated_forOpen<R = boolean, P0 = unknown, P1 = number, P2 = unknown, P3 = boolean>(__constraintAccessoryViewWantsCentering: P0, _collapsePriority: P1, _constraintsCreated: P2, _forOpen: P3): R;
      _oldSchoolAccessoryViewWantsCentering<R = boolean, P0 = unknown>(__oldSchoolAccessoryViewWantsCentering: P0): R;
      _accessoryViewIsOldSchool<R = boolean, P0 = unknown>(__accessoryViewIsOldSchool: P0): R;
      unwrapAccessoryIfNecessary<R = unknown, P0 = unknown>(_unwrapAccessoryIfNecessary: P0): R;
      adaptAccessoryIfNecessary_collapsePriority_forOpen<R = unknown, P0 = unknown, P1 = number, P2 = boolean>(_adaptAccessoryIfNecessary: P0, _collapsePriority: P1, _forOpen: P2): R;
    }
  }
}

declare const NSSaveAccessoryAdapter: cocoa.NSSaveAccessoryAdapter.CLASS;

/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginsPreferenceTableCellView<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
    cxx_destruct<R = void>(): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    tableCellWidthConstraint<R = NSLayoutConstraint>(): R;
    setTableCellWidthConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    iconView<R = MSPluginsPreferenceIconView>(): R;
    setIconView<R = void, P0 = MSPluginsPreferenceIconView>(_v: P0): R;
    descriptionField<R = NSTextField>(): R;
    setDescriptionField<R = void, P0 = NSTextField>(_v: P0): R;
    incompatiblePluginHeightConstraint<R = NSLayoutConstraint>(): R;
    setIncompatiblePluginHeightConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    updateAvailableHeightConstraint<R = NSLayoutConstraint>(): R;
    setUpdateAvailableHeightConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    pluginUpdating<R = NSProgressIndicator>(): R;
    setPluginUpdating<R = void, P0 = NSProgressIndicator>(_v: P0): R;
    updatePlugin<R = NSButton>(): R;
    setUpdatePlugin<R = void, P0 = NSButton>(_v: P0): R;
    updateAvailableInfo<R = MSPluginsPreferencesUpdateButton>(): R;
    setUpdateAvailableInfo<R = void, P0 = MSPluginsPreferencesUpdateButton>(_v: P0): R;
    pluginIncompatibleContainer<R = NSView>(): R;
    setPluginIncompatibleContainer<R = void, P0 = NSView>(_v: P0): R;
    updateAvailableContainer<R = NSView>(): R;
    setUpdateAvailableContainer<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace MSPluginsPreferenceTableCellView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
      alloc<R = MSPluginsPreferenceTableCellView>(): R;
      new: <R = MSPluginsPreferenceTableCellView>() => R;
    }
  }
}

declare const MSPluginsPreferenceTableCellView: cocoa.MSPluginsPreferenceTableCellView.CLASS;

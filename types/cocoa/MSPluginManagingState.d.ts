/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginManagingState<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    removeIncompatibilityRegistrations<R = void>(): R;
    removeDisableOverrides<R = void>(): R;
    registerIncompatibilityForPluginIdentifier_withVersion<R = boolean, P0 = unknown, P1 = unknown>(_registerIncompatibilityForPluginIdentifier: P0, _withVersion: P1): R;
    setMetadataValue_forKey_identifier<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_setMetadataValue: P0, _forKey: P1, _identifier: P2): R;
    metadataValueForKey_identifier<R = unknown, P0 = unknown, P1 = unknown>(_metadataValueForKey: P0, _identifier: P1): R;
    setPluginMetadaDictionary_forIdentifier<R = boolean, P0 = unknown, P1 = unknown>(_setPluginMetadaDictionary: P0, _forIdentifier: P1): R;
    isPluginVersion_incompatibleWithVersion<R = boolean, P0 = unknown, P1 = unknown>(_isPluginVersion: P0, _incompatibleWithVersion: P1): R;
    isPluginWithIdentifier_incompatibleWithVersion<R = boolean, P0 = unknown, P1 = unknown>(_isPluginWithIdentifier: P0, _incompatibleWithVersion: P1): R;
    registerPluginIncompatibilityForVersions<R = number, P0 = unknown>(_registerPluginIncompatibilityForVersions: P0): R;
    updateMetadataWithPluginIndentifiers<R = void, P0 = unknown>(_updateMetadataWithPluginIndentifiers: P0): R;
    shouldEnablePluginIdentifier_withVersion<R = boolean, P0 = unknown, P1 = unknown>(_shouldEnablePluginIdentifier: P0, _withVersion: P1): R;
    setEnabled_forPluginIdentifier_withVersion<R = void, P0 = boolean, P1 = unknown, P2 = unknown>(_setEnabled: P0, _forPluginIdentifier: P1, _withVersion: P2): R;
    resetIncompatiblePluginMetadata<R = void>(): R;
    initWithMetadataURL_incompatiblePlugins<R = unknown, P0 = unknown, P1 = unknown>(_initWithMetadataURL: P0, _incompatiblePlugins: P1): R;
    incompatiblePluginVersions<R = NSDictionary>(): R;
    metadata<R = NSDictionary>(): R;
    setMetadata<R = void, P0 = NSDictionary>(_v: P0): R;
    metadataURL<R = NSURL>(): R;
  }
  namespace MSPluginManagingState {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSPluginManagingState>(): R;
      new: <R = MSPluginManagingState>() => R;
      incompatiblePlugins<R = unknown>(): R;
      existingDownloadededBlacklistURL<R = unknown>(): R;
    }
  }
}

declare const MSPluginManagingState: cocoa.MSPluginManagingState.CLASS;

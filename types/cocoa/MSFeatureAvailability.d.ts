/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFeatureAvailability<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSFeatureAvailability {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSFeatureAvailability>(): R;
      new: <R = MSFeatureAvailability>() => R;
      setFeature14414Enabled<R = void, P0 = boolean>(_setFeature14414Enabled: P0): R;
      feature14414Enabled<R = boolean>(): R;
      setCloudOrganizationsEnabled<R = void, P0 = boolean>(_setCloudOrganizationsEnabled: P0): R;
      cloudOrganizationsEnabled<R = boolean>(): R;
      setCloudOAuthEnabled<R = void, P0 = boolean>(_setCloudOAuthEnabled: P0): R;
      cloudOAuthEnabled<R = boolean>(): R;
      setCloudDocumentsEnabled<R = void, P0 = boolean>(_setCloudDocumentsEnabled: P0): R;
      cloudDocumentsEnabled<R = boolean>(): R;
      builtInRemoteLibrariesEnabled<R = boolean>(): R;
      setBuiltInRemoteLibrariesEnabled<R = void, P0 = boolean>(_setBuiltInRemoteLibrariesEnabled: P0): R;
      setIsComponentsPanelEnabled<R = void, P0 = boolean>(_setIsComponentsPanelEnabled: P0): R;
      isComponentsPanelEnabled<R = boolean>(): R;
      setDataSuppliersEnabled<R = void, P0 = boolean>(_setDataSuppliersEnabled: P0): R;
      dataSuppliersEnabled<R = boolean>(): R;
      setLibraryStylesEnabled<R = void, P0 = boolean>(_setLibraryStylesEnabled: P0): R;
      libraryStylesEnabled<R = boolean>(): R;
      setFeature_enabled<R = void, P0 = unknown, P1 = boolean>(_setFeature: P0, _enabled: P1): R;
      isFeatureEnabled<R = boolean, P0 = unknown>(_isFeatureEnabled: P0): R;
      enableFeatureAvailability<R = void>(): R;
    }
  }
}

declare const MSFeatureAvailability: cocoa.MSFeatureAvailability.CLASS;

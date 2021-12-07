/// <reference types="react" />
import {
  ReactComponentPath,
  JSXComponent,
  ISchemaFieldReactFactoryOptions,
  SchemaReactComponents,
  ISchemaFieldProps,
  ISchemaMarkupFieldProps,
  ISchemaTypeFieldProps,
} from '../types'
export declare function createSchemaField<
  Components extends SchemaReactComponents
>(
  options?: ISchemaFieldReactFactoryOptions<Components>
): {
  <Decorator extends JSXComponent, Component extends JSXComponent>(
    props: ISchemaFieldProps<
      Decorator,
      Component,
      import('@formily/core/esm').ObjectField<Decorator, Component>
    >
  ): JSX.Element
  displayName: string
  Markup: {
    <
      Decorator_1 extends ReactComponentPath<
        Components,
        Exclude<
          keyof Components,
          'displayName' | 'contextTypes' | 'propTypes' | 'defaultProps'
        >
      >,
      Component_1 extends ReactComponentPath<
        Components,
        Exclude<
          keyof Components,
          'displayName' | 'contextTypes' | 'propTypes' | 'defaultProps'
        >
      >
    >(
      props: ISchemaMarkupFieldProps<Components, Component_1, Decorator_1>
    ): JSX.Element
    displayName: string
  }
  String: {
    <
      Decorator_2 extends ReactComponentPath<
        Components,
        Exclude<
          keyof Components,
          'displayName' | 'contextTypes' | 'propTypes' | 'defaultProps'
        >
      >,
      Component_2 extends ReactComponentPath<
        Components,
        Exclude<
          keyof Components,
          'displayName' | 'contextTypes' | 'propTypes' | 'defaultProps'
        >
      >
    >(
      props: ISchemaTypeFieldProps<Components, Component_2, Decorator_2>
    ): JSX.Element
    displayName: string
  }
  Object: {
    <
      Decorator_3 extends ReactComponentPath<
        Components,
        Exclude<
          keyof Components,
          'displayName' | 'contextTypes' | 'propTypes' | 'defaultProps'
        >
      >,
      Component_3 extends ReactComponentPath<
        Components,
        Exclude<
          keyof Components,
          'displayName' | 'contextTypes' | 'propTypes' | 'defaultProps'
        >
      >
    >(
      props: ISchemaTypeFieldProps<Components, Component_3, Decorator_3>
    ): JSX.Element
    displayName: string
  }
  Array: {
    <
      Decorator_4 extends ReactComponentPath<
        Components,
        Exclude<
          keyof Components,
          'displayName' | 'contextTypes' | 'propTypes' | 'defaultProps'
        >
      >,
      Component_4 extends ReactComponentPath<
        Components,
        Exclude<
          keyof Components,
          'displayName' | 'contextTypes' | 'propTypes' | 'defaultProps'
        >
      >
    >(
      props: ISchemaTypeFieldProps<Components, Component_4, Decorator_4>
    ): JSX.Element
    displayName: string
  }
  Boolean: {
    <
      Decorator_5 extends ReactComponentPath<
        Components,
        Exclude<
          keyof Components,
          'displayName' | 'contextTypes' | 'propTypes' | 'defaultProps'
        >
      >,
      Component_5 extends ReactComponentPath<
        Components,
        Exclude<
          keyof Components,
          'displayName' | 'contextTypes' | 'propTypes' | 'defaultProps'
        >
      >
    >(
      props: ISchemaTypeFieldProps<Components, Component_5, Decorator_5>
    ): JSX.Element
    displayName: string
  }
  Date: {
    <
      Decorator_6 extends ReactComponentPath<
        Components,
        Exclude<
          keyof Components,
          'displayName' | 'contextTypes' | 'propTypes' | 'defaultProps'
        >
      >,
      Component_6 extends ReactComponentPath<
        Components,
        Exclude<
          keyof Components,
          'displayName' | 'contextTypes' | 'propTypes' | 'defaultProps'
        >
      >
    >(
      props: ISchemaTypeFieldProps<Components, Component_6, Decorator_6>
    ): JSX.Element
    displayName: string
  }
  DateTime: {
    <
      Decorator_7 extends ReactComponentPath<
        Components,
        Exclude<
          keyof Components,
          'displayName' | 'contextTypes' | 'propTypes' | 'defaultProps'
        >
      >,
      Component_7 extends ReactComponentPath<
        Components,
        Exclude<
          keyof Components,
          'displayName' | 'contextTypes' | 'propTypes' | 'defaultProps'
        >
      >
    >(
      props: ISchemaTypeFieldProps<Components, Component_7, Decorator_7>
    ): JSX.Element
    displayName: string
  }
  Void: {
    <
      Decorator_8 extends ReactComponentPath<
        Components,
        Exclude<
          keyof Components,
          'displayName' | 'contextTypes' | 'propTypes' | 'defaultProps'
        >
      >,
      Component_8 extends ReactComponentPath<
        Components,
        Exclude<
          keyof Components,
          'displayName' | 'contextTypes' | 'propTypes' | 'defaultProps'
        >
      >
    >(
      props: ISchemaTypeFieldProps<Components, Component_8, Decorator_8>
    ): JSX.Element
    displayName: string
  }
  Number: {
    <
      Decorator_9 extends ReactComponentPath<
        Components,
        Exclude<
          keyof Components,
          'displayName' | 'contextTypes' | 'propTypes' | 'defaultProps'
        >
      >,
      Component_9 extends ReactComponentPath<
        Components,
        Exclude<
          keyof Components,
          'displayName' | 'contextTypes' | 'propTypes' | 'defaultProps'
        >
      >
    >(
      props: ISchemaTypeFieldProps<Components, Component_9, Decorator_9>
    ): JSX.Element
    displayName: string
  }
}

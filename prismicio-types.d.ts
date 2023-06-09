// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for post documents */
interface PostDocumentData {
  /**
   * title field in *post*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Título do post
   * - **API ID Path**: post.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismicT.TitleField;
  /**
   * cover field in *post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post.cover
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  cover: prismicT.ImageField<never>;
  /**
   * description field in *post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Conteúdo
   * - **API ID Path**: post.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * video field in *post*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: post.video
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/embed
   *
   */
  video: prismicT.EmbedField;
}
/**
 * post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<Simplify<PostDocumentData>, "post", Lang>;
export type AllDocumentTypes = PostDocument;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type { PostDocumentData, PostDocument, AllDocumentTypes };
  }
}

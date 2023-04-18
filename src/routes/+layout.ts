import Feature from "$lib/components/Feature.svelte";
import Grid from "$lib/components/Grid.svelte";
import Page from "$lib/components/Page.svelte";
import Teaser from "$lib/components/Teaser.svelte";
import Unused1 from "$lib/components/Unused1.svelte";
import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";

const components = {
  feature: Feature,
  grid: Grid,
  page: Page,
  teaser: Teaser,
  unused1: Unused1,
};

export async function load() {
  storyblokInit({
    accessToken: "X7CoD455aCxxE2pmrj4DQAtt",
    use: [apiPlugin],
    components,
    apiOptions: {
      https: true,
    },
  });
  const storyblokApi = useStoryblokApi();

  return {
    storyblokApi
  };
}

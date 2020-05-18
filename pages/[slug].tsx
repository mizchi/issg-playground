import { GetStaticProps, GetStaticPaths } from "next";

type Props = {
  slug: string;
  builtAt: number;
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  return {
    props: {
      slug: ctx.params.slug as string,
      builtAt: Date.now(),
    },
    unstable_revalidate: 30,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["/foo"],
    fallback: true,
  };
};

export default (props: Props) => {
  return (
    <>
      {props.slug}: {props.builtAt}
    </>
  );
};

import ResourceItem from "./components/resourceItem";
import styles from "./styles.module.css";
import { Box } from "@material-ui/system";
import { Typography } from "@material-ui/core";
const Resources = () => {
  const resources = [
    {
      type: "lifestyle",
      title: "Lifestyle",
      links: [
        { name: "Modern Day Moguls", link: "https://moderndaymoguls.com/" },
        { name: "Scary Mommy", link: "https://www.scarymommy.com/" },
        { name: "Faust Island ", link: "https://www.faustisland.com/" },
      ],
    },
    {
      type: "parenting",
      title: "Parenting",
      links: [
        { name: "Parents", link: "https://www.parents.com/" },
        {
          name: "Bundoo",
          link: "https://www.bundoo.com/",
        },
        {
          name: "Pregnant Chicken",
          link: "https://pregnantchicken.com/",
        },
      ],
    },
    {
      type: "self-care",
      title: "Self-Care",
      links: [
        { name: "Parent Self-Care", link: "https://parentselfcare.com/" },
        {
          name: "Meditation",
          link: "https://www.headspace.com/meditation-101/what-is-meditation",
        },
        {
          name: "Undefining Motherhood",
          link: "https://undefiningmotherhood.com/self-care-community-care/",
        },
      ],
    },
    {
      type: "talk to someone",
      title: "Talk to Someone",
      links: [
        { name: "National Parent Helpline", link: "1-855-427-2736" },
        { name: "Parents Helping Parents", link: "1-800-632-8188" },
        { name: "National Domestic Violence Hotline", link: "1-800-799-7233" },
      ],
    },
  ];
  const renderResouces = () => {
    return resources.map((resource) => {
      const renderLinks = () => {
        return resource.links.map((item) => {
          return (
            <div className={styles.resourceBox} key={item.name}>
              <ResourceItem name={item.name} link={item.link} />
            </div>
          );
        });
      };
      return (
        <Box width="100%" key={resource.type} marginBottom="30px">
          <Typography variant="h5" component="div">
            {resource.title}
          </Typography>
          <Box display="flex" flexWrap="wrap">
            {renderLinks()}
          </Box>
        </Box>
      );
    });
  };
  return <div className={styles.wrapper}>{renderResouces()}</div>;
};

export default Resources;

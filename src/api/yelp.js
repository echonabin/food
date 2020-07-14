import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer xB9Ab8-VbT_BosEe5oSFGUXDnhsMD-XefGF1QwrmBOvxqPZzLx_3doM9e0VO9w7xTvBRYbr9RoRqu65ejQgOuB2cnOLFn4l0tmt9PDG6ZBa5xZ3mJ38gSxGjnqYMX3Yx",
  },
});

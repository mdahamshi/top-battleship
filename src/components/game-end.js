import { ElementBuilder} from "@sarawebs/sb-utils";

export default function (text) {
  const div = new ElementBuilder("div")
    .setId("winner-modal")
    .addClass("flex-col")
    .append(new ElementBuilder("h2")
      .setId('winner-name')
      .setText(text));


  div.append(
    new ElementBuilder("button")
      .addClass("sb-button")
      .setText("Restart"),
  );

  return div.build();
}

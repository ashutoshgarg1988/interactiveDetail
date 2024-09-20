import React from "react";
import "./FactPopup.css";

const facts = {
  1: {
    title: "Birth of Gandhi",
    content:
      "Gandhi was born on October 2, 1869, in Porbandar, India. He would go on to become one of the most important leaders in the fight for India’s independence.",
    image: "Mahatma-Gandhi-1931.webp",
  },
  2: {
    title: "Studied Law in London",
    content:
      "In 1888, Gandhi left for London to study law at University College London. He studied to become a barrister, hoping to build a career in law. However, his time in London also exposed him to new ideas and philosophies, shaping his future political views.",
    video: "https://www.youtube.com/embed/YIjAfiW-bT4",
  },
  3: {
    title: "Return to India",
    content:
      "After spending two decades in South Africa, where he fought for civil rights through non-violent protests, Gandhi returned to India in 1915. His experiences in South Africa prepared him to lead India in its struggle for freedom.",
    image: "",
  },
  4: {
    title: "Salt March",
    content:
      "The Salt March, also known as the Dandi March, was one of Gandhi’s most famous acts of civil disobedience. On March 12, 1930, Gandhi and his followers walked 240 miles from Sabarmati Ashram to the Arabian Sea coast in Dandi. They did this to protest the British salt monopoly and the heavy tax imposed on salt, a basic necessity for the people of India. Along the way, thousands of people joined the march, which drew international attention. Gandhi and many others were arrested, but the march became a powerful symbol of India’s resistance against British rule.",
    image: "Salt_March.webp",
    video: "https://www.youtube.com/embed/WW3uk95VGes",
  },
  5: {
    title: "Indian Independence",
    content:
      "On August 15, 1947, after nearly 200 years of British colonial rule, India finally gained independence. The Indian National Congress, led by leaders like Jawaharlal Nehru and Sardar Patel, took charge of the new government. Gandhi, though not part of the government, was considered the moral leader of the movement. His philosophy of non-violence (Ahimsa) and civil disobedience (Satyagraha) had inspired millions of Indians to fight for their freedom without resorting to violence. Despite the joy of independence, Gandhi was deeply saddened by the partition of India and the violence that followed between Hindus and Muslims.",
    image: "independence.jpg",
  },
  6: {
    title: "Assassination",
    content:
      "On January 30, 1948, just a few months after India's independence, Mahatma Gandhi was assassinated in New Delhi by Nathuram Godse, a Hindu nationalist. Godse opposed Gandhi’s efforts to promote Hindu-Muslim unity, and his anger over Gandhi’s perceived favoritism toward Muslims led him to commit the act. Gandhi’s death sent shockwaves across India and the world. Millions of people mourned the loss of the man who had dedicated his life to fighting injustice through non-violence. His assassination marked the end of an era, but his legacy of peace and non-violence continues to inspire movements for justice around the world.",
    image: "assasination.jpg",
    video: "https://www.youtube.com/embed/4zq_JH_uxvA",
  },
};

const FactPopup = ({ event, onClose }) => {
  const fact = facts[event.id];

  return (
    <div className="popup">
      <h2>{fact && fact.title}</h2>
      <p>{fact && fact.content}</p>
      {fact && fact.image && (
        <img
          src={`${process.env.PUBLIC_URL + fact.image}`}
          alt={fact.title}
          width="350"
        />
      )}
      {fact && fact.video && (
        <iframe
          width="500"
          height="250"
          src={fact.video} // Embed YouTube video link
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default FactPopup;

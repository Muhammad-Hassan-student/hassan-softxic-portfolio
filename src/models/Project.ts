import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    longDescription: {
      type: String,
      required: true,
    },
    client: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["web", "mobile", "saas", "ecommerce", "enterprise", "other"],
      required: true,
    },
    techStack: [
      {
        name: String,
        icon: String,
        color: String,
      },
    ],
    images: [
      {
        url: String,
        alt: String,
        isMain: Boolean,
      },
    ],
    features: [String],
    challenges: [String],
    solutions: [String],
    results: [
      {
        metric: String,
        value: String,
        icon: String,
      },
    ],
    metrics: {
      performance: String,
      speed: String,
      scale: String,
    },
    links: {
      live: String,
      github: String,
      demo: String,
    },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
    seo: {
      title: String,
      description: String,
      keywords: [String],
    },
    publishedAt: {
      type: Date,
      default: null,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);

import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring, Sequence, Img, Easing } from "remotion";

const TETALBOT_AVATAR = "https://www.remotionvideo.com/objects/uploads/904a3668-45d0-48ce-99b7-dd98d5d0fc62";
const DISCORD_SCREENSHOT_1 = "https://www.remotionvideo.com/objects/uploads/f7cbdd0b-91d7-434f-b681-c698300549ee";
const DISCORD_SCREENSHOT_2 = "https://www.remotionvideo.com/objects/uploads/1c5a8787-3824-4a3a-8ca5-9b1ed8f6c370";
const DISCORD_SCREENSHOT_3 = "https://www.remotionvideo.com/objects/uploads/6930ed8f-77a3-425e-97a7-80098f1f90a0";
const DISCORD_SCREENSHOT_4 = "https://www.remotionvideo.com/objects/uploads/c2d97c7a-2017-4460-ad60-d2758ab6938e";
const DISCORD_SCREENSHOT_5 = "https://www.remotionvideo.com/objects/uploads/3539ab96-a125-4048-82a3-585a09071af9";
const DISCORD_SCREENSHOT_6 = "https://www.remotionvideo.com/objects/uploads/94df3390-33b7-49f5-ab3a-7cda9fcf2781";
const DISCORD_SCREENSHOT_7 = "https://www.remotionvideo.com/objects/uploads/7f403d7c-6cfe-4f9a-bafd-14ded4df09e7";
const DISCORD_SCREENSHOT_8 = "https://www.remotionvideo.com/objects/uploads/2c69cd39-1c5b-428f-8f8d-3bc009203135";






const GeneratedComposition = ({
  title = "TetalBot",
  brandColor = "#5865F2",
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Scene timing
  const introEnd = Math.floor(fps * 1.5); // 45 frames
  const muteEnd = Math.floor(fps * 5); // 150 frames
  const channelEnd = Math.floor(fps * 10); // 300 frames
  const naturalEnd = Math.floor(fps * 12); // 360 frames
  const brandingEnd = Math.floor(fps * 15); // 450 frames

  return (
    React.createElement(AbsoluteFill, { style: { backgroundColor: "#0a0a0f" },}
      /* Scene 1: Cinematic iPhone Introduction */
      , React.createElement(Sequence, { from: 0, durationInFrames: introEnd, premountFor: fps,}
        , React.createElement(CinematicIntro, { fps: fps, brandColor: brandColor,} )
      )

      /* Scene 2: Mute Demonstration */
      , React.createElement(Sequence, { from: introEnd, durationInFrames: muteEnd - introEnd, premountFor: fps,}
        , React.createElement(MuteDemo, { fps: fps,} )
      )

      /* Scene 3: Category and Channel Creation */
      , React.createElement(Sequence, { from: muteEnd, durationInFrames: channelEnd - muteEnd, premountFor: fps,}
        , React.createElement(ChannelCreation, { fps: fps,} )
      )

      /* Scene 4: Natural Language Interaction */
      , React.createElement(Sequence, { from: channelEnd, durationInFrames: naturalEnd - channelEnd, premountFor: fps,}
        , React.createElement(NaturalInteraction, { fps: fps,} )
      )

      /* Scene 5: Branding and CTA */
      , React.createElement(Sequence, { from: naturalEnd, durationInFrames: brandingEnd - naturalEnd, premountFor: fps,}
        , React.createElement(BrandingCTA, { fps: fps, brandColor: brandColor, title: title,} )
      )
    )
  );
};

// Scene 1: Cinematic iPhone Introduction with zoom through screen
const CinematicIntro = ({ fps, brandColor }) => {
  const frame = useCurrentFrame();
  
  const zoomProgress = interpolate(
    frame,
    [0, fps * 1.5],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) }
  );

  const scale = interpolate(zoomProgress, [0, 1], [1, 8], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const phoneOpacity = interpolate(zoomProgress, [0.7, 1], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const discordOpacity = interpolate(zoomProgress, [0.6, 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    React.createElement(AbsoluteFill, { style: { backgroundColor: "#050508" },}
      /* Blue rim light glow */
      , React.createElement('div', {
        style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          height: 850,
          background: `radial-gradient(ellipse at center, ${brandColor}40 0%, transparent 70%)`,

          opacity: interpolate(zoomProgress, [0, 0.5], [0.8, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        },}
      )

      /* iPhone Frame */
      , React.createElement('div', {
        style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${scale})`,
          opacity: phoneOpacity,
          transformOrigin: "center center",
        },}

        , React.createElement('div', {
          style: {
            width: 320,
            height: 680,
            backgroundColor: "#1a1a1a",
            borderRadius: 50,
            padding: 12,
            boxShadow: `0 0 60px ${brandColor}30, 0 25px 80px rgba(0,0,0,0.8)`,
            border: "3px solid #2a2a2a",
          },}

          /* Notch */
          , React.createElement('div', {
            style: {
              position: "absolute",
              top: 20,
              left: "50%",
              transform: "translateX(-50%)",
              width: 120,
              height: 30,
              backgroundColor: "#000",
              borderRadius: 20,
              zIndex: 10,
            },}
          )
          /* Screen */
          , React.createElement('div', {
            style: {
              width: "100%",
              height: "100%",
              backgroundColor: "#36393f",
              borderRadius: 38,
              overflow: "hidden",
            },}

            , React.createElement(Img, {               src: DISCORD_SCREENSHOT_1,
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
              },}
             )
          )
        )
      )

      /* Full screen Discord transition */
      , React.createElement('div', {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: discordOpacity,
        },}

        , React.createElement(Img, {           src: DISCORD_SCREENSHOT_1,
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
          },}
         )
      )
    )
  );
};

// Scene 2: Mute Demonstration
const MuteDemo = ({ fps }) => {
  const frame = useCurrentFrame();
  const totalFrames = fps * 3.5;

  const scrollProgress = interpolate(
    frame,
    [fps * 0.5, fps * 2],
    [0, 100],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.quad) }
  );

  const messageOpacity = spring({
    frame: frame - fps * 0.3,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });

  const responseOpacity = spring({
    frame: frame - fps * 1.2,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });

  const successOpacity = spring({
    frame: frame - fps * 2,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });

  return (
    React.createElement(AbsoluteFill, { style: { backgroundColor: "#36393f" },}
      /* Discord Mobile Header */
      , React.createElement('div', {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 100,
          backgroundColor: "#202225",
          display: "flex",
          alignItems: "center",
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 44,
        },}

        , React.createElement('div', { style: { color: "#fff", fontSize: 20, fontWeight: 600, fontFamily: "Inter, sans-serif" },}, "# general"

        )
      )

      /* Chat Messages */
      , React.createElement('div', {
        style: {
          position: "absolute",
          top: 120,
          left: 0,
          right: 0,
          bottom: 80,
          padding: 16,
          transform: `translateY(-${scrollProgress}px)`,
        },}

        /* User Message */
        , React.createElement('div', {
          style: {
            opacity: messageOpacity,
            marginBottom: 20,
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
          },}

          , React.createElement('div', {
            style: {
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: "#5865F2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 18,
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
            },}
, "M"

          )
          , React.createElement('div', null
            , React.createElement('div', { style: { color: "#7289da", fontSize: 16, fontWeight: 600, marginBottom: 4, fontFamily: "Inter, sans-serif" },}, "Moderator"

            )
            , React.createElement('div', {
              style: {
                backgroundColor: "#40444b",
                padding: "12px 16px",
                borderRadius: 8,
                color: "#dcddde",
                fontSize: 16,
                maxWidth: 280,
                fontFamily: "Inter, sans-serif",
              },}
, "@TetalBot mute @SpamUser for 10 minutes"

            )
          )
        )

        /* TetalBot Response */
        , React.createElement('div', {
          style: {
            opacity: responseOpacity,
            marginBottom: 20,
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
          },}

          , React.createElement('div', {
            style: {
              width: 44,
              height: 44,
              borderRadius: 22,
              overflow: "hidden",
            },}

            , React.createElement(Img, {               src: TETALBOT_AVATAR,
              style: { width: "100%", height: "100%", objectFit: "cover" },}
             )
          )
          , React.createElement('div', null
            , React.createElement('div', { style: { color: "#5865F2", fontSize: 16, fontWeight: 600, marginBottom: 4, fontFamily: "Inter, sans-serif" },}, "TetalBot"

              , React.createElement('span', { style: { backgroundColor: "#5865F2", color: "#fff", fontSize: 10, padding: "2px 6px", borderRadius: 4, marginLeft: 8 },}, "BOT"

              )
            )
            , React.createElement('div', {
              style: {
                backgroundColor: "#40444b",
                padding: "12px 16px",
                borderRadius: 8,
                color: "#dcddde",
                fontSize: 16,
                maxWidth: 320,
                fontFamily: "Inter, sans-serif",
              },}
, "✅ Successfully muted SpamUser for 10 minutes."

            )
          )
        )

        /* Success indicator */
        , React.createElement('div', {
          style: {
            opacity: successOpacity,
            display: "flex",
            justifyContent: "center",
            marginTop: 40,
          },}

          , React.createElement('div', {
            style: {
              backgroundColor: "#3ba55d",
              padding: "8px 24px",
              borderRadius: 20,
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
            },}
, "Action Completed"

          )
        )
      )

      /* Input Bar */
      , React.createElement('div', {
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          backgroundColor: "#40444b",
          padding: 16,
          display: "flex",
          alignItems: "center",
        },}

        , React.createElement('div', {
          style: {
            flex: 1,
            height: 44,
            backgroundColor: "#202225",
            borderRadius: 22,
            paddingLeft: 16,
            display: "flex",
            alignItems: "center",
            color: "#72767d",
            fontSize: 16,
            fontFamily: "Inter, sans-serif",
          },}
, "Message #general"

        )
      )
    )
  );
};

// Scene 3: Category and Channel Creation
const ChannelCreation = ({ fps }) => {
  const frame = useCurrentFrame();

  const chatPhase = frame < fps * 2.5;
  const transitionProgress = interpolate(
    frame,
    [fps * 2.3, fps * 2.8],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) }
  );

  const messageOpacity = spring({
    frame: frame - fps * 0.2,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });

  const responseOpacity = spring({
    frame: frame - fps * 1,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });

  const channelReveal = (index) => spring({
    frame: frame - fps * 3 - index * 8,
    fps,
    config: { damping: 15, stiffness: 120 },
    durationInFrames: 20,
  });

  const channels = ["stuff", "conflicts", "other", "europe"];

  return (
    React.createElement(AbsoluteFill, { style: { backgroundColor: "#36393f" },}
      /* Chat Phase */
      , React.createElement('div', {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 1 - transitionProgress,
        },}

        /* Header */
        , React.createElement('div', {
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 100,
            backgroundColor: "#202225",
            display: "flex",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 44,
          },}

          , React.createElement('div', { style: { color: "#fff", fontSize: 20, fontWeight: 600, fontFamily: "Inter, sans-serif" },}, "# bot-commands"

          )
        )

        /* Chat */
        , React.createElement('div', { style: { position: "absolute", top: 120, left: 0, right: 0, bottom: 80, padding: 16 },}
          /* User Message */
          , React.createElement('div', {
            style: {
              opacity: messageOpacity,
              marginBottom: 20,
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
            },}

            , React.createElement('div', {
              style: {
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: "#ed4245",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 18,
                fontWeight: 600,
                fontFamily: "Inter, sans-serif",
              },}
, "A"

            )
            , React.createElement('div', null
              , React.createElement('div', { style: { color: "#ed4245", fontSize: 16, fontWeight: 600, marginBottom: 4, fontFamily: "Inter, sans-serif" },}, "Admin"

              )
              , React.createElement('div', {
                style: {
                  backgroundColor: "#40444b",
                  padding: "12px 16px",
                  borderRadius: 8,
                  color: "#dcddde",
                  fontSize: 15,
                  maxWidth: 300,
                  lineHeight: 1.4,
                  fontFamily: "Inter, sans-serif",
                },}
, "@TetalBot create a category called News with channels: #stuff, #conflicts, #other, #europe"

              )
            )
          )

          /* TetalBot Response */
          , React.createElement('div', {
            style: {
              opacity: responseOpacity,
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
            },}

            , React.createElement('div', { style: { width: 44, height: 44, borderRadius: 22, overflow: "hidden" },}
              , React.createElement(Img, { src: TETALBOT_AVATAR, style: { width: "100%", height: "100%", objectFit: "cover" },}  )
            )
            , React.createElement('div', null
              , React.createElement('div', { style: { color: "#5865F2", fontSize: 16, fontWeight: 600, marginBottom: 4, fontFamily: "Inter, sans-serif" },}, "TetalBot"

                , React.createElement('span', { style: { backgroundColor: "#5865F2", color: "#fff", fontSize: 10, padding: "2px 6px", borderRadius: 4, marginLeft: 8 },}, "BOT"

                )
              )
              , React.createElement('div', {
                style: {
                  backgroundColor: "#40444b",
                  padding: "12px 16px",
                  borderRadius: 8,
                  color: "#dcddde",
                  fontSize: 15,
                  maxWidth: 320,
                  fontFamily: "Inter, sans-serif",
                },}
, "🛠️ Creating category \"News\" with 4 channels..."

              )
            )
          )
        )
      )

      /* Channel Drawer Phase */
      , React.createElement('div', {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: transitionProgress,
          backgroundColor: "#2f3136",
        },}

        /* Server Header */
        , React.createElement('div', {
          style: {
            height: 120,
            backgroundColor: "#202225",
            display: "flex",
            alignItems: "center",
            paddingLeft: 20,
            paddingTop: 50,
            borderBottom: "1px solid #1a1a1a",
          },}

          , React.createElement('div', {
            style: {
              width: 48,
              height: 48,
              borderRadius: 16,
              backgroundColor: "#5865F2",
              marginRight: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 20,
              fontWeight: 700,
              fontFamily: "Inter, sans-serif",
            },}
, "T"

          )
          , React.createElement('div', { style: { color: "#fff", fontSize: 18, fontWeight: 600, fontFamily: "Inter, sans-serif" },}, "TetalBot Server"

          )
        )

        /* Channel List */
        , React.createElement('div', { style: { padding: "20px 12px" },}
          /* Existing channels */
          , React.createElement('div', { style: { color: "#8e9297", fontSize: 12, fontWeight: 700, letterSpacing: 0.5, marginBottom: 8, paddingLeft: 8, fontFamily: "Inter, sans-serif" },}, "TEXT CHANNELS"

          )
          , React.createElement('div', { style: { color: "#8e9297", fontSize: 16, padding: "8px 12px", fontFamily: "Inter, sans-serif" },}, "# general"

          )
          , React.createElement('div', { style: { color: "#8e9297", fontSize: 16, padding: "8px 12px", fontFamily: "Inter, sans-serif" },}, "# bot-commands"

          )

          /* News Category */
          , React.createElement('div', { style: { marginTop: 24 },}
            , React.createElement('div', {
              style: {
                color: "#fff",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 0.5,
                marginBottom: 8,
                paddingLeft: 8,
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "Inter, sans-serif",
              },}

              , React.createElement('span', { style: { fontSize: 10 },}, "▼"), " NEWS"
              , React.createElement('span', {
                style: {
                  backgroundColor: "#3ba55d",
                  color: "#fff",
                  fontSize: 9,
                  padding: "2px 6px",
                  borderRadius: 4,
                  marginLeft: 8,
                },}
, "NEW"

              )
            )

            , channels.map((channel, index) => {
              const progress = channelReveal(index);
              const translateY = interpolate(progress, [0, 1], [30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
              
              return (
                React.createElement('div', {
                  key: channel,
                  style: {
                    color: "#8e9297",
                    fontSize: 16,
                    padding: "10px 12px",
                    paddingLeft: 28,
                    opacity: progress,
                    transform: `translateY(${translateY}px)`,
                    backgroundColor: index === 0 ? "#393c43" : "transparent",
                    borderRadius: 4,
                    fontFamily: "Inter, sans-serif",
                  },}
, "# "
                   , channel
                )
              );
            })
          )
        )

        /* Success Badge */
        , React.createElement('div', {
          style: {
            position: "absolute",
            bottom: 100,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: interpolate(frame, [fps * 4, fps * 4.5], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          },}

          , React.createElement('div', {
            style: {
              backgroundColor: "#3ba55d",
              padding: "10px 28px",
              borderRadius: 24,
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              boxShadow: "0 4px 20px rgba(59, 165, 93, 0.4)",
              fontFamily: "Inter, sans-serif",
            },}
, "✓ Category Created Successfully"

          )
        )
      )
    )
  );
};

// Scene 4: Natural Language Interaction
const NaturalInteraction = ({ fps }) => {
  const frame = useCurrentFrame();

  const questionOpacity = spring({
    frame: frame - fps * 0.2,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });

  const answerOpacity = spring({
    frame: frame - fps * 0.8,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });

  return (
    React.createElement(AbsoluteFill, { style: { backgroundColor: "#36393f" },}
      /* Header */
      , React.createElement('div', {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 100,
          backgroundColor: "#202225",
          display: "flex",
          alignItems: "center",
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 44,
        },}

        , React.createElement('div', { style: { color: "#fff", fontSize: 20, fontWeight: 600, fontFamily: "Inter, sans-serif" },}, "# general"

        )
      )

      /* Chat */
      , React.createElement('div', { style: { position: "absolute", top: 120, left: 0, right: 0, bottom: 80, padding: 16 },}
        /* User Question */
        , React.createElement('div', {
          style: {
            opacity: questionOpacity,
            marginBottom: 20,
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
          },}

          , React.createElement('div', {
            style: {
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: "#faa61a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 18,
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
            },}
, "J"

          )
          , React.createElement('div', null
            , React.createElement('div', { style: { color: "#faa61a", fontSize: 16, fontWeight: 600, marginBottom: 4, fontFamily: "Inter, sans-serif" },}, "Jake"

            )
            , React.createElement('div', {
              style: {
                backgroundColor: "#40444b",
                padding: "12px 16px",
                borderRadius: 8,
                color: "#dcddde",
                fontSize: 16,
                maxWidth: 300,
                fontFamily: "Inter, sans-serif",
              },}
, "Hey @TetalBot, what's the weather like today?"

            )
          )
        )

        /* TetalBot Response */
        , React.createElement('div', {
          style: {
            opacity: answerOpacity,
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
          },}

          , React.createElement('div', { style: { width: 44, height: 44, borderRadius: 22, overflow: "hidden" },}
            , React.createElement(Img, { src: TETALBOT_AVATAR, style: { width: "100%", height: "100%", objectFit: "cover" },}  )
          )
          , React.createElement('div', null
            , React.createElement('div', { style: { color: "#5865F2", fontSize: 16, fontWeight: 600, marginBottom: 4, fontFamily: "Inter, sans-serif" },}, "TetalBot"

              , React.createElement('span', { style: { backgroundColor: "#5865F2", color: "#fff", fontSize: 10, padding: "2px 6px", borderRadius: 4, marginLeft: 8 },}, "BOT"

              )
            )
            , React.createElement('div', {
              style: {
                backgroundColor: "#40444b",
                padding: "12px 16px",
                borderRadius: 8,
                color: "#dcddde",
                fontSize: 16,
                maxWidth: 340,
                lineHeight: 1.5,
                fontFamily: "Inter, sans-serif",
              },}
, "I can help with server moderation, but for weather you might want to check a weather app! 🌤️ Is there anything else I can help you with?"

            )
          )
        )
      )

      /* Input Bar */
      , React.createElement('div', {
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          backgroundColor: "#40444b",
          padding: 16,
          display: "flex",
          alignItems: "center",
        },}

        , React.createElement('div', {
          style: {
            flex: 1,
            height: 44,
            backgroundColor: "#202225",
            borderRadius: 22,
            paddingLeft: 16,
            display: "flex",
            alignItems: "center",
            color: "#72767d",
            fontSize: 16,
            fontFamily: "Inter, sans-serif",
          },}
, "Message #general"

        )
      )
    )
  );
};

// Scene 5: Branding and CTA
const BrandingCTA = ({ fps, brandColor, title }) => {
  const frame = useCurrentFrame();

  const logoScale = spring({
    frame: frame - fps * 0.2,
    fps,
    config: { damping: 15, stiffness: 100 },
    durationInFrames: 40,
  });

  const titleOpacity = spring({
    frame: frame - fps * 0.5,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });

  const subtitleOpacity = spring({
    frame: frame - fps * 0.8,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });

  const ctaOpacity = spring({
    frame: frame - fps * 1.2,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });

  const linkOpacity = spring({
    frame: frame - fps * 1.6,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });

  const fadeOut = interpolate(
    frame,
    [fps * 2.5, fps * 3],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    React.createElement(AbsoluteFill, {
      style: {
        backgroundColor: "#0a0a0f",
        opacity: fadeOut,
      },}

      /* Background glow */
      , React.createElement('div', {
        style: {
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 500,
          background: `radial-gradient(circle, ${brandColor}25 0%, transparent 60%)`,
        },}
      )

      /* Content */
      , React.createElement('div', {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          padding: 40,
        },}

        /* Logo */
        , React.createElement('div', {
          style: {
            width: 140,
            height: 140,
            borderRadius: 40,
            overflow: "hidden",
            transform: `scale(${logoScale})`,
            boxShadow: `0 0 60px ${brandColor}50`,
            marginBottom: 40,
          },}

          , React.createElement(Img, {             src: TETALBOT_AVATAR,
            style: { width: "100%", height: "100%", objectFit: "cover" },}
           )
        )

        /* Title */
        , React.createElement('div', {
          style: {
            color: "#fff",
            fontSize: 56,
            fontWeight: 700,
            opacity: titleOpacity,
            marginBottom: 12,
            fontFamily: "Inter, sans-serif",
          },}

          , title
        )

        /* Subtitle */
        , React.createElement('div', {
          style: {
            color: "#94a3b8",
            fontSize: 24,
            fontWeight: 400,
            opacity: subtitleOpacity,
            marginBottom: 60,
            fontFamily: "Inter, sans-serif",
          },}
, "Your Discord Moderation Agent"

        )

        /* CTA */
        , React.createElement('div', {
          style: {
            opacity: ctaOpacity,
            marginBottom: 20,
          },}

          , React.createElement('div', {
            style: {
              backgroundColor: brandColor,
              padding: "18px 48px",
              borderRadius: 30,
              color: "#fff",
              fontSize: 20,
              fontWeight: 600,
              boxShadow: `0 8px 30px ${brandColor}60`,
              fontFamily: "Inter, sans-serif",
            },}
, "Invite TetalBot to your server"

          )
        )

        /* Link */
        , React.createElement('div', {
          style: {
            color: "#5865F2",
            fontSize: 18,
            fontWeight: 500,
            opacity: linkOpacity,
            fontFamily: "Inter, sans-serif",
          },}
, "discord.gg/DRW6EWJPAZ"

        )
      )
    )
  );
};

export default GeneratedComposition;
import { useState } from "react";
import { useRouter } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const BRAND_COLOR = "#af0404";
const PAGE_BG = "#EBDCF4";
const PANEL_BG = "#FFFFFF";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = () => {
    console.log("Hi! this is ur email", email, "this is ur pwd", pwd);
    router.replace("/(tabs)");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.screen}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <Image
            source={require("../assets/images/bg1.jpeg")}
            style={styles.heroImage}
            resizeMode="stretch"
          />
          <Text style={styles.heroTitle}>Welcome{"\n"}Back</Text>
          <Text style={styles.heroSubtitle}>Find your perfect match</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#9A9AA7"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#9A9AA7"
              value={pwd}
              onChangeText={setPwd}
              secureTextEntry
              style={styles.input}
            />
          </View>

          <View style={styles.utilityRow}>
            <Pressable style={styles.rememberRow} onPress={() => setRemember(!remember)}>
              <View style={[styles.checkbox, remember && styles.checkboxActive]} />
              <Text style={styles.rememberText}>Remember me</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </Pressable>
          </View>

          <Pressable style={styles.primaryButton} onPress={handleSubmit}>
            <Text style={styles.primaryButtonText}>Login</Text>
          </Pressable>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>{"Don't have an account?"}</Text>
            <Pressable onPress={() => router.push("/register")}>
              <Text style={styles.footerLink}>Register</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: PAGE_BG,
  },
  scrollContent: {
    flexGrow: 1,
  },
  hero: {
    height: 285,
    width: "100%",
    alignSelf: "stretch",
    paddingHorizontal: 26,
    paddingTop: 74,
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  heroTitle: {
    fontSize: 48,
    lineHeight: 48,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  heroSubtitle: {
    marginTop: 10,
    color: "#DAD5E6",
    fontSize: 15,
  },
  card: {
    flex: 1,
    marginTop: -24,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: PANEL_BG,
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 30,
  },
  fieldGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: "#4A4A55",
    marginBottom: 8,
    fontWeight: "600",
  },
  input: {
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 16,
    color: "#232332",
    backgroundColor: "#F1EFF7",
  },
  utilityRow: {
    marginTop: 2,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkbox: {
    width: 14,
    height: 14,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#B8B5C4",
    backgroundColor: "#fff",
  },
  checkboxActive: {
    backgroundColor: BRAND_COLOR,
    borderColor: BRAND_COLOR,
  },
  rememberText: {
    color: "#6A6779",
    fontSize: 13,
  },
  forgotText: {
    color: BRAND_COLOR,
    fontSize: 13,
    fontWeight: "700",
  },
  primaryButton: {
    marginTop: 6,
    backgroundColor: BRAND_COLOR,
    borderRadius: 14,
    alignItems: "center",
    paddingVertical: 15,
    shadowColor: BRAND_COLOR,
    shadowOpacity: 0.35,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
  footerRow: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    color: "#666377",
    fontSize: 14,
  },
  footerLink: {
    color: BRAND_COLOR,
    fontSize: 14,
    fontWeight: "700",
  },
});
